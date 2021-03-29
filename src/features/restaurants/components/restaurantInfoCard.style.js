import styled from "styled-components/native";
import { Card } from "react-native-paper";

export const RestaurantCard = styled(Card)`
    background-color: ${({theme}) => theme.colors.bg.primary};
`;

export const RestaurantCardCover = styled(Card.Cover)`
    background-color: ${({theme}) => theme.colors.bg.primary};
    padding: ${({theme}) => theme.space[2]};
`;

export const Info = styled(Card.Content)`
    padding: ${({theme}) => theme.space[2]};
`;

export const Icon = styled.Image`
    width: 15px;
    height: 15px;
`;

export const Section = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const SectionEnd = styled.View`
    flex-direction: row;
`;

export const RatingContainer = styled.View`
    flex-direction: row;
    padding: ${({theme}) => theme.space[1]} 0;
`;
