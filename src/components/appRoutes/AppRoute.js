import { createBrowserRouter } from "react-router";
import App from "../../App";
import HomePage from "../pages/HomePage";
import FoodRestaurants from "../pages/FoodRestaurants";

export const router = createBrowserRouter([
  {
    path: "/",
    element: App,
    children: [
      { index: true, Component: HomePage },
      { path: "restaurants", Component: FoodRestaurants },
    ],
  },
]);
