import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
    loading: false,
    data: [],
    error: ''
}
export const fetchProduct = createAsyncThunk('product/fetchProduct',
    async type => {
        const response = await axios.get('https://dummyjson.com/carts/1')
        console.log("prd", response)
        return response.data.products;
    }
)
export const addProduct = createAsyncThunk('product/addProduct',
    async type => {
        const json = await axios.post('https://dummyjson.com/carts/add', {
            userId: 1,
            products: type
        })
        return json.data.products
    })

export const updateProduct = createAsyncThunk('product/updateProduct',
    async type => {
        const json = await axios.put('https://dummyjson.com/carts/1', {
            products: [type]
        })
        return json.data.products
    })

    export const deleteCart = createAsyncThunk('product/deleteCart',
    async type => {
        const json = await axios.delete('https://dummyjson.com/carts/1')
        return json
    })


const database = createSlice({
    name: "product",
    initialState,
    reducers: {


    },
    extraReducers: {
        [fetchProduct.pending]: (state, action) => {
            state.loading = true
        },
        [fetchProduct.fulfilled]: (state, action) => {
            state.loading = false
            state.data = action.payload
            state.error = ''
        },
        [fetchProduct.rejected]: (state, action) => {
            state.loading = false
            state.data = []
            state.error = action.error.message
        },
        [addProduct.pending]: (state, action) => {
            state.error = ''
        },
        [addProduct.fulfilled]: (state, action) => {
            state.error = 'Items added successfully.'
            state.data = action.payload
        },
        [addProduct.rejected]: (state, action) => {
            state.error = 'Error in adding to cart.'
        },
        [updateProduct.pending]: (state, action) => {
            state.error = ''
        },
        [updateProduct.fulfilled]: (state, action) => {
            state.error = 'Items Updated successfully.'
            state.data = action.payload
        },
        [updateProduct.rejected]: (state, action) => {
            state.error = 'Error in Update to cart.'
        },
        [deleteCart.fulfilled]: (state, action) => {
            state.error = 'Deleted Succesfully.'
            state.data=[]
        },
        [deleteCart.pending]: (state, action) => {
            state.error = ''
        },
        [deleteCart.rejected]: (state, action) => {
            state.error = 'Error in Delete to cart.'
        }
    }
});
export default database.reducer
export const { AddData, UpdateData, DeleteData } = database.actions
