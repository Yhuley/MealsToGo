import React, { useContext, useState, useEffect } from "react";
import {Searchbar} from "react-native-paper";
import styled from "styled-components/native";
import {View} from "react-native";
import { LocationContext } from "../../../services/location/location.context";

const SearchContainer = styled(View)`
    padding: ${({theme}) => theme.space[3]};
`;

const Search = ({ isFavouritesToggled, onFavouritesToggle }) => {
    const { keyword, search } = useContext(LocationContext);
    const [searchKeyword, setSearchKeyword] = useState(keyword);

    useEffect(() => {
        setSearchKeyword(keyword);
    },[keyword]);

    return (
        <SearchContainer>
            <Searchbar
                icon={isFavouritesToggled ? "heart" : "heart-outline"}
                onIconPress={onFavouritesToggle}
                placeholder="search restaurants"
                value={searchKeyword}
                onChangeText={text => setSearchKeyword(text)}
                onSubmitEditing={() => search(searchKeyword)}
            />
        </SearchContainer>
    );
};

export default Search;
