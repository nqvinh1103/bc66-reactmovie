import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/product";
import bannerSlice from "./slices/banner"
import movieDetailSlice from "./slices/movieDetail";

const store = configureStore({
    reducer: {
        product: productSlice,
        banner: bannerSlice,
        movieDetail: movieDetailSlice,
    },
    devTools: true
})

export default store