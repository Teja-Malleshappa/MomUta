import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./components/HomePage";

const App = () => {
  return (
    <div className="w-full h-full font-winky">
      <HomePage />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
