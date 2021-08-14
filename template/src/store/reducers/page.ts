
import { createSlice } from "@reduxjs/toolkit";

export const PageSlice = createSlice({
	name: "PageSlice",
	initialState: {
		isLoading: false,
	},
	reducers: {
    SET_LOADING(state,{payload}:{payload:boolean}){
      state.isLoading = payload
    },
	},
});