import React from "react";
import {createStackNavigator, TransitionPreset, TransitionPresets} from "@react-navigation/stack";
import RestaurantsScreen from "../../features/restaurants/screens/restaurants.screen";

const RestaurantStack = createStackNavigator();

const RestaurantsNavigation = () => {
    return (
        <RestaurantStack.Navigator headerMode="none" screenOptions={{...TransitionPresets.ModalPresentationIOS}}>
            <RestaurantStack.Screen name="Restaurants" component={RestaurantsScreen}/>
            <RestaurantStack.Screen name="RestaurantDetail" component={() => null}/>
        </RestaurantStack.Navigator>
    );
};

export default RestaurantsNavigation;
