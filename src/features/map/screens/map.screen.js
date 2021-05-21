import React, { useContext, useState, useEffect } from "react";
import MapView from "react-native-maps";
import styled from "styled-components/native";

import Search from "../components/search.component";
import {LocationContext} from "../../../services/location/location.context";
import {RestaurantsContext} from "../../../services/restaurants/restaurants.context";
import MapCallout from "../components/mapCallout.component";

const Map = styled(MapView)`
    height: 100%;
    width: 100%;
`;

const MapScreen = ({ navigation }) => {
    const { location } = useContext(LocationContext);
    const { restaurants = [] } = useContext(RestaurantsContext);

    const [latDelta, setLatDelta] = useState(0);

    const { lng, lat, viewport } = location;

    useEffect(() => {
        const northeastLat = viewport.northeast.lat;
        const southwestLat = viewport.southwest.lat;

        setLatDelta(northeastLat - southwestLat);
    },[location, viewport]);

    return (
        <>
            <Search/>
            <Map
                region={{
                    latitude: lat,
                    longitude: lng,
                    latitudeDelta: latDelta,
                    longitudeDelta: 0.02,
                }}
            >
                {
                    restaurants.map(restaurant => {
                        return (
                            <MapView.Marker
                                key={restaurant.name}
                                coordinate={{
                                    longitude: restaurant.geometry.location.lng,
                                    latitude: restaurant.geometry.location.lat
                                }}
                            >
                                <MapView.Callout
                                    onPress={() => navigation.navigate("RestaurantDetail", { restaurant })}
                                >
                                    <MapCallout restaurant={restaurant}/>
                                </MapView.Callout>
                            </MapView.Marker>
                        )
                    })
                }
            </Map>
        </>
    );
};

export default MapScreen;
