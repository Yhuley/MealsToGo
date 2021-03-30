import React from "react";
import { View, FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import { SafeArea } from "../../../components/utility/safeArea.component";
import RestaurantInfoCard from "../components/restaurantInfoCard.component";
import styled from "styled-components/native";
import { Spacer } from "../../../components/spacer/spacer.component";

const SearchContainer = styled(View)`
    margin: ${({theme}) => theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
    contentContainerStyle: {
        padding: 16,
    }
})``;

const RestaurantsScreen = () => {

    return (
        <SafeArea>
            <SearchContainer>
                <Searchbar/>
            </SearchContainer>
            <RestaurantList
                data={[{name: 1}, {name: 2}, {name: 3}, {name: 4}]}
                renderItem={() =>
                    <>
                        <Spacer
                            position="bottom"
                            size="large"
                        >
                            <RestaurantInfoCard/>
                        </Spacer>
                    </>
                }
                keyExtarctor={item => item.name}
                contentContainerStyle={{ padding: 16 }}
            />
        </SafeArea>
    );
};

export default RestaurantsScreen;
