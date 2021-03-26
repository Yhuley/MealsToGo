import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet } from "react-native";
import { ThemeProvider } from "styled-components/native";

import { useFonts as useJost, Jost_400Regular } from "@expo-google-fonts/jost";
import { useFonts as useInriaSans, InriaSans_400Regular } from "@expo-google-fonts/inria-sans";

import RestaurantScreen from "./src/features/restaurants/screens/restaurants.screen";
import { theme } from "./src/infrastructure/theme/index";

export default function App() {
    const [jostLoaded] = useJost({
        Jost_400Regular,
    });

    const [inriaSansLoaded] = useInriaSans({
        InriaSans_400Regular,
    });

    if(!jostLoaded || !inriaSansLoaded) return null;
    return (
        <>
            <ThemeProvider theme={theme}>
                <RestaurantScreen/>
            </ThemeProvider>
            <ExpoStatusBar style="auto"/>
        </>
    );
}

const styles = StyleSheet.create({});
