import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {Ionicons} from "@expo/vector-icons";
import {SafeArea} from "../../components/utility/safeArea.component";
import {Text} from "react-native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import RestaurantsNavigation from "./restaurants.navigation";
import MapScreen from "../../features/map/screens/map.screen";

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

const AppNavigation = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={createScreenOptions}
                tabBarOptions={{
                    activeTintColor: "rgb(0, 122, 255)",
                    inactiveTintColor: "gray",
                }}
            >
                <Tab.Screen name="Restaurants" component={RestaurantsNavigation}/>
                <Tab.Screen name="Map" component={MapScreen} />
                <Tab.Screen name="Settings" component={Settings} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigation;