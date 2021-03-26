import React from "react";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Spacer } from "../../../components/spacer.component";
import { Text } from "../../../components/typography/text.component";
import {
    RestaurantCard,
    RestaurantCardCover,
    RatingContainer,
    Icon,
    Info,
    Section,
    SectionEnd
} from "./restaurantInfoCard.style";

const RestaurantInfoCard = ({restaurant = {}}) => {
    const {
        name = "Old Mill",
        icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
        rating = 4.5,
        photos = [
            "https://p.bookcdn.com/data/Photos/r1366x457/9947/994789/994789909/Stary-Mlyn-photos-Exterior-Stary-Mlyn.JPEG",
        ],
        address = "Stopchativ",
        isOpenNow = false,
        isClosedTemporarily = "true",
    } = restaurant;

    const ratingArray = Array.from(new Array(Math.ceil(rating)));


    return (
        <RestaurantCard evlevation={5}>
            <RestaurantCardCover
                key={name}
                source={{uri: photos[0]}}
            />
            <Info>
                <Text variant="label">
                    {name}
                    <Spacer
                        position="left"
                        size="medium"
                    />
                    <Icon source={{ uri: icon }}/>
                </Text>
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
                                <Text variant="caption">OPEN NOW</Text>
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
                                <Text variant="error">CLOSED NOW</Text>
                                <Spacer
                                    position="right"
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
                <Text variant="label">{address}</Text>
            </Info>
        </RestaurantCard>
    );
};

export default RestaurantInfoCard;
