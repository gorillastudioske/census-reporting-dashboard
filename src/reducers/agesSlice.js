import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchCollection = createAsyncThunk(
    'ages/fetchCollection',
    async (url, thunkAPI) => {
        const response = await axios.get(url)
        return response.data
    }
)

export const agesSlice = createSlice({
    name: 'ages',
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
export const { } = agesSlice.actions

export default agesSlice.reducer