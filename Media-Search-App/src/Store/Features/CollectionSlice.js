
import { createSlice } from "@reduxjs/toolkit"
const initialState = {
    item: JSON.parse(localStorage.getItem("Collections")) || []

}

const CollectionSlice = createSlice({
    name : "Collection",
    initialState,
    reducers : {
        addCollection : (state,action) => {
          const existingItem =  state.item.some((item) => item.id === action.payload.id)
if(!existingItem){
    state.item.push(action.payload)
    localStorage.setItem("Collections", JSON.stringify(state.item))
}
        },
        removeCollection : (state,action) => {
            const index = state.item.findIndex((item) => item.id === action.payload)
            if(index !== -1){
                state.item.splice(index , 1)
                localStorage.setItem("Collections",JSON.stringify(state.item))
             
            }
        },
        emptyCollection : (state) => {
            state.item = []
            localStorage.removeItem("Collections")
        },
     
    }
})

 export const {addCollection,removeCollection,emptyCollection} = CollectionSlice.actions
export default CollectionSlice.reducer