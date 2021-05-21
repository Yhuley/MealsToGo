import {StatusBar as ExpoStatusBar} from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {ThemeProvider} from "styled-components/native";
import {useFonts as useJost, Jost_400Regular} from "@expo-google-fonts/jost";
import {useFonts as useInriaSans, InriaSans_400Regular} from "@expo-google-fonts/inria-sans";
import * as firebase from "firebase";

import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { FavouritesContextProvider } from "./src/services/favourites/favourites.context";

import {theme} from "./src/infrastructure/theme/index";
import {Navigation} from "./src/infrastructure/navigation";

const firebaseConfig = {
    apiKey: "AIzaSyDEF9NDZeGD_LIrD9fVOWS5lnh7F3ixq_s",
    authDomain: "mealstogo-30a92.firebaseapp.com",
    projectId: "mealstogo-30a92",
    storageBucket: "mealstogo-30a92.appspot.com",
    messagingSenderId: "598778274817",
    appId: "1:598778274817:web:4c4b2fab419d1feed38c00"
};

if(!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        firebase
            .auth()
            .signInWithEmailAndPassword("email@gmail.com", "password")
            .then(user => {
                console.log(user);
                setIsAuthenticated(true);
            }).catch(e => {
                console.log(e);
        })

    }, []);

    const [jostLoaded] = useJost({
        Jost_400Regular,
    });

    const [inriaSansLoaded] = useInriaSans({
        InriaSans_400Regular,
    });

    if (!jostLoaded || !inriaSansLoaded) {
        return null;
    }

    return (
        <>
            <ThemeProvider theme={theme}>
                <FavouritesContextProvider>
                    <LocationContextProvider>
                        <RestaurantsContextProvider>
                            <Navigation/>
                        </RestaurantsContextProvider>
                    </LocationContextProvider>
                </FavouritesContextProvider>
            </ThemeProvider>
            <ExpoStatusBar style="auto"/>
        </>
    );
}
