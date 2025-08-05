import ReactDOM from "react-dom/client";
import { Outlet, RouterProvider } from "react-router";
import { router } from "./components/appRoutes/AppRoute";
import { store } from "../src/store/store";
import { Provider } from "react-redux";

const App = () => {
  return (
    <div className="text-[#02060c]">
      <Outlet />
    </div>
  );
};

export default App;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
