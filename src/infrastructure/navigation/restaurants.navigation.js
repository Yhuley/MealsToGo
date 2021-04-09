import React from "react";
import {createStackNavigator, TransitionPreset, TransitionPresets} from "@react-navigation/stack";
import RestaurantsScreen from "../../features/restaurants/screens/restaurants.screen";
import RestaurantDetailScreen from "../../features/restaurants/screens/restaurantDetail.screen";

const RestaurantStack = createStackNavigator();

const RestaurantsNavigation = () => {
    return (
        <RestaurantStack.Navigator headerMode="none" screenOptions={{...TransitionPresets.ModalPresentationIOS}}>
            <RestaurantStack.Screen name="Restaurants" component={RestaurantsScreen}/>
            <RestaurantStack.Screen name="RestaurantDetail" component={RestaurantDetailScreen}/>
        </RestaurantStack.Navigator>
    );
};

export default RestaurantsNavigation;
