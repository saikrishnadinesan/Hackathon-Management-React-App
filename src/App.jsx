import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import AddTeam from "./components/AddTeam";
import ViewTeam from "./components/ViewTeam";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/add-team"
          element={<AddTeam />}
        />

        <Route
          path="/view-team"
          element={<ViewTeam />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;