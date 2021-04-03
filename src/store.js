import { configureStore } from '@reduxjs/toolkit'
import agesReducer from './reducers/agesSlice';
import populationReducer from "./reducers/populationSlice";
import metaCountiesReducer from "./reducers/metaCountiesSlice";
import countiesGeojsonReducer from "./reducers/countiesGeojsonSlice";

export default configureStore({
    reducer: {
        population: populationReducer,
        ages: agesReducer,
        metaCounties: metaCountiesReducer,
        countiesGeojson: countiesGeojsonReducer
    }
})