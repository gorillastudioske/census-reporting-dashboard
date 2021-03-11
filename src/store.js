import { configureStore } from '@reduxjs/toolkit'
import populationReducer from "./reducers/populationSlice";

export default configureStore({
    reducer: { population: populationReducer }
})