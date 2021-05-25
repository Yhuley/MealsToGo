import React, { useContext } from "react";
import {NavigationContainer} from "@react-navigation/native";

import AppNavigation from "./app.navigation";
import {AuthenticationContext} from "../../services/authentication/authentication.context";
import AccountNavigator from "./account.navigator";

export const Navigation = () => {
    const { isAuthenticated } = useContext(AuthenticationContext);
    return (
        <NavigationContainer>
            { isAuthenticated ? <AppNavigation /> : <AccountNavigator/> }
        </NavigationContainer>
    );
};
