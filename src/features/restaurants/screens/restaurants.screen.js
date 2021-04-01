import React, { useContext } from "react";
import { View, FlatList } from "react-native";
import Spinner from "react-native-loading-spinner-overlay";
import { Searchbar } from "react-native-paper";
import { SafeArea } from "../../../components/utility/safeArea.component";
import RestaurantInfoCard from "../components/restaurantInfoCard.component";
import styled from "styled-components/native";
import { Spacer } from "../../../components/spacer/spacer.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";

const SearchContainer = styled(View)`
    margin: ${({theme}) => theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
    contentContainerStyle: {
        padding: 16,
    }
})``;

const RestaurantsScreen = () => {
    const { restaurants, isLoading, error } = useContext(RestaurantsContext);

    return (
        <SafeArea>
            <Spinner visible={isLoading}/>
            <SearchContainer>
                <Searchbar/>
            </SearchContainer>
            <RestaurantList
                data={restaurants}
                renderItem={({item}) => {
                    return (
                    <>
                        <Spacer position="bottom" size="large">
                            <RestaurantInfoCard restaurant={item}/>
                        </Spacer>
                    </>
                    );
                }}
                keyExtarctor={item => item.name}
                contentContainerStyle={{ padding: 16 }}
            />
        </SafeArea>
    );
};

export default RestaurantsScreen;
