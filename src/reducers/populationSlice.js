import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchCollection = createAsyncThunk(
    'population/fetchCollection',
    async (url, thunkAPI) => {
        const response = await axios.get(url)
        return response.data
    }
)

export const populationSlice = createSlice({
    name: 'population',
    initialState: {
        collection: []
    },
    reducers: {},
    extraReducers: {
        [fetchCollection.fulfilled]: (state, action) => {
            state.collection = action.payload
        }
    }
})

// Action creators are generated for each case reducer function
export const { } = populationSlice.actions

export default populationSlice.reducer