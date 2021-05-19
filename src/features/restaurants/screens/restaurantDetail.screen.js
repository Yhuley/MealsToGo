import React, {useState} from "react";
import {ScrollView} from "react-native";
import {List} from "react-native-paper";
import RestaurantInfoCard from "../components/restaurantInfoCard.component";
import {SafeArea} from "../../../components/utility/safeArea.component";

const RestaurantDetailScreen = ({route}) => {
    const [breakfastExpanded, setBreakfastExpanded] = useState(false);
    const [lunchExpanded, setLunchExpanded] = useState(false);
    const [dinnerExpanded, setDinnerExpanded] = useState(false);
    const [drinksExpanded, setDrinksExpanded] = useState(false);

    const {restaurant} = route.params;

    return (
        <SafeArea>
            <ScrollView>
                <RestaurantInfoCard restaurant={restaurant}/>
                <List.Accordion
                    title="Breakfast"
                    expanded={breakfastExpanded}
                    left={props => <List.Icon {...props} icon="coffee"/>}
                    onPress={() => setBreakfastExpanded(!breakfastExpanded)}
                >
                    <List.Item title="First item"/>
                    <List.Item title="Second item"/>
                </List.Accordion>

                <List.Accordion
                    title="Lunch"
                    expanded={lunchExpanded}
                    left={props => <List.Icon {...props} icon="hamburger"/>}
                    onPress={() => setLunchExpanded(!lunchExpanded)}
                >
                    <List.Item title="First item"/>
                    <List.Item title="Second item"/>
                </List.Accordion>

                <List.Accordion
                    title="Dinner"
                    expanded={dinnerExpanded}
                    left={props => <List.Icon {...props} icon="folder"/>}
                    onPress={() => setDinnerExpanded(!dinnerExpanded)}
                >
                    <List.Item title="First item"/>
                    <List.Item title="Second item"/>
                </List.Accordion>

                <List.Accordion
                    title="Drinks"
                    expanded={drinksExpanded}
                    left={props => <List.Icon {...props} icon="glass-cocktail"/>}
                    onPress={() => setDrinksExpanded(!drinksExpanded)}
                >
                    <List.Item title="First item"/>
                    <List.Item title="Second item"/>
                </List.Accordion>
            </ScrollView>
        </SafeArea>
    );
};

export default RestaurantDetailScreen;