import React, { useContext } from "react";
import { FlatList, ActivityIndicator, TouchableOpacity } from "react-native";
import { SafeArea } from "../../../components/utility/safeArea.component";
import RestaurantInfoCard from "../components/restaurantInfoCard.component";
import styled from "styled-components/native";
import { Spacer } from "../../../components/spacer/spacer.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import Search from "../components/search.component";

const RestaurantList = styled(FlatList).attrs({
    contentContainerStyle: {
        padding: 16,
    }
})``;

const Loading = styled(ActivityIndicator)``;

const LoadingContainer = styled.View`
    position: absolute;
    top: 50%;
    left: 50%;
`;

const RestaurantsScreen = ({navigation}) => {
    const { restaurants, isLoading, error } = useContext(RestaurantsContext);

    return (
        <SafeArea>
            {isLoading && (
                <LoadingContainer>
                    <Loading/>
                </LoadingContainer>
            )}
            <Search/>
            <RestaurantList
                data={restaurants}
                renderItem={({item}) => {
                    return (
                    <TouchableOpacity onPress={() => navigation.navigate("RestaurantDetail", {restaurant: item})}>
                        <Spacer position="bottom" size="large">
                            <RestaurantInfoCard restaurant={item}/>
                        </Spacer>
                    </TouchableOpacity>
                    );
                }}
                keyExtractor={item => item.name}
                contentContainerStyle={{ padding: 16 }}
            />
        </SafeArea>
    );
};

export default RestaurantsScreen;
