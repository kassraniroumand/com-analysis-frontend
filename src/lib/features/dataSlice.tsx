import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import {dataApi} from '../services/dataApi'
interface DataState {
    query: string
    results: any
}

const initialState: DataState = {
    query: "",
    results: null
}

const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        setquery: (state, action: PayloadAction<string>) => {
            state.query = action.payload
        },
        setResults: (state, action: PayloadAction<any>) => {
            state.results = action.payload
        }
    },
    extraReducers: (builder, ) => {
        builder.addMatcher(
            dataApi.endpoints.triggerWorkflow.matchFulfilled,
            (state, {payload}) => {
                state.results = payload
            }
        )
    }
})

export default dataSlice.reducer
export const { setquery, setResults } = dataSlice.actions