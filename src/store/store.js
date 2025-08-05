import { configureStore } from "@reduxjs/toolkit";
import swiggyReducer from "../features/swiggySlice";
import locationReducer from "../features/locationSlice";

export const store = configureStore({
  reducer: {
    swiggy: swiggyReducer,
    location: locationReducer,
  },
});
