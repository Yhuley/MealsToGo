import {StatusBar as ExpoStatusBar} from "expo-status-bar";
import React from "react";
import {ThemeProvider} from "styled-components/native";
import { Text } from "react-native";
import { SafeArea } from "./src/components/utility/safeArea.component";
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import {useFonts as useJost, Jost_400Regular} from "@expo-google-fonts/jost";
import {useFonts as useInriaSans, InriaSans_400Regular} from "@expo-google-fonts/inria-sans";

import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import RestaurantsScreen from "./src/features/restaurants/screens/restaurants.screen";
import {theme} from "./src/infrastructure/theme/index";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
    Restaurants: "ios-restaurant-sharp",
    Map: "ios-map-sharp",
    Settings: "ios-settings-sharp",
};

const createScreenOptions = ({ route }) => {
    const iconName = TAB_ICON[route.name];
    return {
        tabBarIcon: ({ size, color }) => (
            <Ionicons name={iconName} size={size} color={color} />
        ),
    };
};

const Settings = () => (
    <SafeArea>
        <Text>Settings</Text>
    </SafeArea>
);
const Map = () => (
    <SafeArea>
        <Text>Map</Text>
    </SafeArea>
);

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
                <RestaurantsContextProvider>
                    <NavigationContainer>
                        <Tab.Navigator
                            screenOptions={createScreenOptions}
                            tabBarOptions={{
                                activeTintColor: "rgb(0, 122, 255)",
                                inactiveTintColor: "gray",
                            }}
                        >
                            <Tab.Screen name="Restaurants" component={RestaurantsScreen}/>
                            <Tab.Screen name="Map" component={Map} />
                            <Tab.Screen name="Settings" component={Settings} />
                        </Tab.Navigator>
                    </NavigationContainer>
                </RestaurantsContextProvider>
            </ThemeProvider>
            <ExpoStatusBar style="auto"/>
        </>
    );
}
