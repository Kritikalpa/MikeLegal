import AppBar from "./containers/AppBar";
import DashboardContainer from "./containers/DashboardContainer";
import NavigationContainer from "./containers/NavigationContainer";
import React, { useState } from "react";
import PlaceholderContainer from "./containers/PlaceholderContainer";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <BrowserRouter>
        <AppBar setToggle={setToggle} />
        <NavigationContainer toggle={toggle} setToggle={setToggle} />
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<DashboardContainer />} />
          <Route path="*" element={<PlaceholderContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
