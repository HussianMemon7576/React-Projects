import { configureStore } from "@reduxjs/toolkit";
import SearchReducer from "./Features/SearchSlice"
import CollectionReducer from "./Features/CollectionSlice" 
const Store = configureStore({
    reducer : {
        search : SearchReducer,
        Collection : CollectionReducer
    }
})
export default Store