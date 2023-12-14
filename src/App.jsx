import { useState } from "react";
import "./App.css";
// import FormCheckButtonType from "./components/FormCheckButtonType";

// import BodyScience from "./assets/bodyScience.png";
import Home from "./screens/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormPage from "./screens/FormPage";
import ThankYou from "./screens/ThankYou";

// const formObject = [
//   {
//     icon: BodyScience,
//     name: "bodyScience",
//     iconName: "bodyScience",
//     text: "bodyScience",
//   },
//   {
//     icon: "require('./assets/creamation.png')",
//     name: "creamation",
//     iconName: "creamation",
//     text: "creamation",
//   },
//   {
//     icon: "require('./assets/graveyard.png')",
//     name: "graveyard",
//     iconName: "graveyard",
//     text: "graveyard",
//   },
// ];

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="h-full w-full overflow-hidden">
              <Home />
            </div>
          }
        />
        <Route
          path="/form"
          element={
            <div className="h-full w-full overflow-hidden">
              <FormPage />
            </div>
          }
        />
        <Route
          path="/form/thankYou"
          element={
            <div className="h-full w-full overflow-hidden">
              <ThankYou />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
