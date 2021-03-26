import React from "react";
import { Text } from "react-native";
import { Card, Paragraph, Title } from "react-native-paper";
import styled from "styled-components/native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import {Spacer} from "../../../components/spacer.component";

const RestaurantCard = styled(Card)`
    background-color: ${({theme}) => theme.colors.bg.primary};
    margin: ${({theme}) => theme.space[3]};
`;

const RestaurantCardCover = styled(Card.Cover)`
    background-color: ${({theme}) => theme.colors.bg.primary};
    padding: ${({theme}) => theme.space[2]};
`;

const Info = styled(Card.Content)`
    padding: ${({theme}) => theme.space[2]};
`;

const RestaurantCardTitle = styled(Title)`
    font-family: ${({theme}) => theme.fonts.heading};
    font-size: ${({theme}) => theme.fontSizes.title};
    color: ${({theme}) => theme.colors.ui.primary};
`;

const Section = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

const SectionEnd = styled.View`
    flex-direction: row;
`;

const RatingContainer = styled.View`
    flex-direction: row;
    padding: ${({theme}) => theme.space[1]} 0;
`;

const Adress = styled(Paragraph)`
    font-family: ${({theme}) => theme.fonts.body};
    font-size: ${({theme}) => theme.fontSizes.body};
    color: ${({theme}) => theme.colors.ui.primary};
`;

const RestaurantInfoCard = ({restaurant = {}}) => {
    const {
        name = "Old Mill",
        icon,
        rating = 4.5,
        photos = [
            "https://p.bookcdn.com/data/Photos/r1366x457/9947/994789/994789909/Stary-Mlyn-photos-Exterior-Stary-Mlyn.JPEG",
        ],
        address = "Stopchativ",
        isOpenNow = false,
        isClosedTemporarily,
    } = restaurant;

    const ratingArray = Array.from(new Array(Math.ceil(rating)));


    return (
        <RestaurantCard evlevation={5}>
            <RestaurantCardCover
                key={name}
                source={{uri: photos[0]}}
            />
            <Info>
                <RestaurantCardTitle>{name}</RestaurantCardTitle>
                <Section>
                    <RatingContainer>
                        {ratingArray.map(() => (
                            <>
                                <Ionicons
                                    name="ios-star"
                                    size={16}
                                    color="gold"
                                />
                                <Spacer
                                    position="left"
                                    size="small"
                                />
                            </>
                            ))}
                    </RatingContainer>
                    <SectionEnd>
                        {isOpenNow ?
                            <>
                                <Text>OPEN NOW</Text>
                                <Spacer
                                    position="left"
                                    size="large"
                                />
                                <MaterialCommunityIcons
                                    name="door-open"
                                    size={18}
                                    color="red"
                                />
                            </>
                            :
                            <>
                                <Text>CLOSED NOW</Text>
                                <Spacer
                                    position="left"
                                    size="large"
                                />
                                <MaterialCommunityIcons
                                    name="door-closed"
                                    size={18}
                                    color="red"
                                />
                            </>
                        }
                    </SectionEnd>
                </Section>
                <Adress>{address}</Adress>
            </Info>
        </RestaurantCard>
    );
};

export default RestaurantInfoCard;
