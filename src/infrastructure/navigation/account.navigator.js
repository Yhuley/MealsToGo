import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const AccountNavigator = () => {
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="Main" component={() => null} />
        </Stack.Navigator>
    );
};

export default AccountNavigator;