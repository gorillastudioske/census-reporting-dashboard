import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchFeatureCollection = createAsyncThunk(
    'countiesGeojson/fetchFeatureCollection',
    async (url, thunkAPI) => {
        const response = await axios.get(url)
        return response.data
    }
)

export const countiesGeojsonSlice = createSlice({
    name: 'countiesGeojson',
    initialState: {
        collection: null
    },
    reducers: {},
    extraReducers: {
        [fetchFeatureCollection.fulfilled]: (state, action) => {
            state.collection = action.payload
        }
    }
})

// Action creators are generated for each case reducer function
export const { } = countiesGeojsonSlice.actions

export default countiesGeojsonSlice.reducer