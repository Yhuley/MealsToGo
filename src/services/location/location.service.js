import camelize from "camelize";
import  { locations } from "./location.mock";

export const locationRequest = city => {
    return new Promise((resolve, reject) => {
        const locationMock = locations[city];

        if(!locationMock) {
            reject("not found");
        }
        resolve(locationMock);
    });
};

export const locationTransform = ({results}) => {
    const formattedResponse = camelize(results);
    const { geometry = {} } = formattedResponse[0];
    const { lng, lat } = geometry.location;

    return { lng, lat, viewport: geometry.viewport };
};
