import React from "react";
import "../styles/navigationcontainer.scss";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import NavigationList from "../components/NavigationList";

function NavigationContainer({ toggle, setToggle }) {
  return (
    <div className="navigation-container">
      <SwipeableDrawer
        anchor="left"
        open={toggle}
        onClose={() => {
          setToggle(false);
        }}
        onOpen={() => {
          setToggle(true);
        }}
      >
        <NavigationList />
      </SwipeableDrawer>
      <div className="horizontal-menu">
        <NavigationList />
      </div>
    </div>
  );
}

export default NavigationContainer;
