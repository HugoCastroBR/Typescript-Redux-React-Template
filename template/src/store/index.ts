import { configureStore } from "@reduxjs/toolkit"
import { PageSlice } from "store/reducers/page";


const store = configureStore({
  reducer:{
    Page: PageSlice.reducer,
  }
})

export default store;
export type RootState = ReturnType<typeof store.getState>

export const PageActions = PageSlice.actions