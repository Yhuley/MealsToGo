import {StatusBar as ExpoStatusBar} from "expo-status-bar";
import React from "react";
import {ThemeProvider} from "styled-components/native";
import {useFonts as useJost, Jost_400Regular} from "@expo-google-fonts/jost";
import {useFonts as useInriaSans, InriaSans_400Regular} from "@expo-google-fonts/inria-sans";

import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import {theme} from "./src/infrastructure/theme/index";
import {Navigation} from "./src/infrastructure/navigation";

export default function App() {
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
                <LocationContextProvider>
                    <RestaurantsContextProvider>
                        <Navigation/>
                    </RestaurantsContextProvider>
                </LocationContextProvider>
            </ThemeProvider>
            <ExpoStatusBar style="auto"/>
        </>
    );
}
