import ReactDOM from "react-dom/client";
import { Outlet, RouterProvider } from "react-router";
import { router } from "./components/appRoutes/AppRoute";

const App = () => {
  return (
    <div className="text-[#02060c]">
      <Outlet />
    </div>
  );
};

export default App;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
