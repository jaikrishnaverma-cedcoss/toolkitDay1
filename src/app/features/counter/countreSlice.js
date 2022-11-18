import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
    data: []
}

const database = createSlice({
    name: "product",
    initialState,
    reducers: {
        AddData: (state, action) => {
            state.data.push({ ...action.payload })
        },
        UpdateData: (state, action) => {
            state.data[action.payload.index] = { ...action.payload.data }
        },
        DeleteData: (state, action) => {
            state.data.splice(action.payload.index, 1)
        }
    }
});
export  default database.reducer
export const {AddData,UpdateData,DeleteData}=database.actions