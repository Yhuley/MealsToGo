import React from "react";
import {CompactRestaurantInfo} from "../../../components/restaurants/compact-restaurant-info.component";

const MapCallout = ({ restaurant }) => {
    return <CompactRestaurantInfo isMap restaurant={restaurant}/>;
};

export default MapCallout;