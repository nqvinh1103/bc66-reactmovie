import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    list: [
        {id:1, name:"Iphone 15 Pro Max", price: 1500},
        {id:2, name:"Iphone 14", price: 1300},
        {id:3, name:"S20", price: 1600},
        {id:4, name:"Oppo", price: 1200}
    ],
}

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        addProduct: (state, action) => {
            const {payload} = action
            console.log(state);
            console.log(action);
            state.list.push(payload)
        },
        deleteProduct: (state, action) => {
            state.list = state.list.filter((item) => item.id !== action.payload)
        }
    },
})

export const {addProduct, deleteProduct} = productSlice.actions
export default productSlice.reducer