import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./components/HomePage";
import "./fonts.css"

const App = () => {
  return (
    <div className="w-full h-full font-gilroy">
      <HomePage />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
