import { createSlice } from "@reduxjs/toolkit"


 const initialState = {
    Query : "",
    Results : [],
    Error : null,
    Loading : false,
    Activetabs: "Photos"

 }
const SearchSlice = createSlice({
    name : "Search",
    initialState,
    reducers: {
        setQuery : (state,action) => {
            state.Query = action.payload

        },
          SetActivetabs : (state,action) => {
            state.Activetabs = action.payload

        },
          SetError : (state,action) => {
            state.Error = action.payload
            state.Loading = false

        },
          SetLoading : (state,action) => {
            state.Error = null
            state.Loading = true

        },
          SetResults : (state,action) => {
          state.Results = action.payload
          state.Loading = false

        },
        
        
    }
})

export const {setQuery,SetActivetabs,SetLoading,SetError,SetResults} = SearchSlice.actions
export default SearchSlice.reducer