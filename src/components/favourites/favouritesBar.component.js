import React from "react";
import {ScrollView, TouchableOpacity} from "react-native";
import styled from "styled-components/native";
import {Spacer} from "../spacer/spacer.component";
import {CompactRestaurantInfo} from "../restaurants/compact-restaurant-info.component";
import { Text } from "../typography/text.component";

const FavouritesWrapper = styled.View`
    padding: 10px;
`;

const FavouritesBar = ({ favourites, onNavigate }) => {
    if (!favourites.length) {
        return null
    }
    return (
        <FavouritesWrapper>
            <Spacer variant="left.large">
                <Text variant="caption">Favourites</Text>
            </Spacer>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {favourites.map(favourite => {
                    const key = favourite.name;

                    return (
                        <Spacer key={key} position="left" size="medium">
                            <TouchableOpacity onPress={() => onNavigate("RestaurantDetail", {restaurant: favourite})}>
                                <CompactRestaurantInfo restaurant={favourite}/>
                            </TouchableOpacity>
                        </Spacer>
                    );
                })}
            </ScrollView>
        </FavouritesWrapper>
    );
};

export default FavouritesBar;