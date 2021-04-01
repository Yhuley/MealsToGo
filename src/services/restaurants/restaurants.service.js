import { mockImages, mocks} from "./mock";
import camelize from "camelize";

export const restaurantsTransform = ({results = []}) => {
    const mappedResults = results.map(restaurant => {
        restaurant.photos = restaurant.photos.map(photo => {
            return mockImages[Math.ceil(Math.random() * mockImages.length - 1)];
        });
        return {
            ...restaurant,
            isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
        };
    });

    return camelize(mappedResults);
};

export const restaurantsRequest = (location = "41.878113,-87.629799") => {
    const mock = mocks[location];

    return new Promise((resolve, reject) => {
        if(!mock){
            reject("not found");
        }
        resolve(mock);
    });
};
