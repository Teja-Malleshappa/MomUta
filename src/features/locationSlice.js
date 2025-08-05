import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  locations: [],
  addressRecommended: [],
};

export const fetchLocationData = (input) => async (dispatch) => {
  try {
    const response = await fetch(
      `https://www.swiggy.com/dapi/misc/place-autocomplete?input=${input}`
    );
    const data = await response.json();
    dispatch(fetchLocations(data?.data));
  } catch (error) {
    console.log("error occured", error);
  }
};

export const fecthAddressRecommendation = (placeId) => async (dispatch) => {
  try {
    const response = await fetch(
      `https://www.swiggy.com/dapi/misc/address-recommend?place_id=${placeId}`
    );
    const data = await response.json();
    dispatch(fetchAddressRecommended(data?.data));
  } catch (error) {
    console.log("error occured", error);
  }
};

export const getCards = (lat, lng, pageLimit) => async (dispatch) => {
  try {
    const response = await fetch(
      `https://www.swiggy.com/dapi/homepagev2/getCards?lat=${lat}&lng=${lng}&pageLimit=${pageLimit}`
    );
    const data = await response.json();
    // console.log(data)
  } catch (error) {
    console.log("error occured", error);
  }
};

export const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    fetchLocations: (state, action) => {
      state.locations = action.payload;
    },
    fetchAddressRecommended: (state, action) => {
      state.addressRecommended = action.payload;
    },
    resetLocations: (state) => {
        state.locations = []
    }
  },
});

export const { fetchLocations, fetchAddressRecommended, resetLocations } =
  locationSlice.actions;
export default locationSlice.reducer;
