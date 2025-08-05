import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  onMindData: {},
  blrRestoData: {},
};

export const fecthSwiggyData = (lat, lng) => async (dispatch) => {
  try {
    const response = await fetch(
      `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
    );
    const data = await response.json();
    dispatch(fetchOnMindData(data?.data?.cards?.[0]?.card?.card));
    dispatch(fetchBlrRestoData(data?.data?.cards?.[1]?.card?.card));
  } catch (error) {
    console.log("error occured", error);
  }
};

export const swiggySlice = createSlice({
  name: "swiggy",
  initialState,
  reducers: {
    fetchOnMindData: (state, action) => {
      state.onMindData = action.payload;
    },
    fetchBlrRestoData: (state, action) => {
      state.blrRestoData = action.payload;
    },
  },
});

export const { fetchOnMindData, fetchBlrRestoData } = swiggySlice.actions;
export default swiggySlice.reducer;
