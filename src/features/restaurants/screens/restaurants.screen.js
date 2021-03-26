import React from "react";
import { SafeAreaView, StatusBar, View } from "react-native";
import {Searchbar} from "react-native-paper";
import RestaurantInfoCard from "../components/restaurantInfoCard.component";
import styled from "styled-components/native";

const SafeArea = styled(SafeAreaView)`
    flex: 1;
    ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`}; 
`;

const SearchContainer = styled(View)`
    margin: ${({theme}) => theme.space[3]};
`;

const RestaurantListContainer = styled(View)`
    flex: 1;
    background-color: ${({theme}) => theme.colors.bg.primary};
`;

const RestaurantScreen = () => {

    return (
        <SafeArea>
            <SearchContainer>
                <Searchbar/>
            </SearchContainer>
            <RestaurantListContainer>
                <RestaurantInfoCard/>
            </RestaurantListContainer>
        </SafeArea>
    );
};

export default RestaurantScreen;
