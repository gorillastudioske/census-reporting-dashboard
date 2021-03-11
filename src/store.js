import { configureStore } from '@reduxjs/toolkit'
import agesReducer from './reducers/agesSlice';
import populationReducer from "./reducers/populationSlice";

export default configureStore({
    reducer: {
        population: populationReducer,
        ages: agesReducer
    }
})