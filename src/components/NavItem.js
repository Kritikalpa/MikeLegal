import React from "react";
import * as Muicon from "@mui/icons-material";
import "../styles/navitem.scss";
import variables from "../utilities/_variables.scss";

function NavItem({ name, icon, active, index, setCurrentView }) {
  const Icon = Muicon[icon];
  return (
    <div
      className="nav-item"
      onClick={() => {
        setCurrentView(index);
      }}
    >
      <div>
        <Icon
          sx={{
            color: active ? variables.primaryText : variables.secondaryText,
          }}
        />
      </div>
      <div className={active ? "nav-name nav-active" : "nav-name"}>{name}</div>
    </div>
  );
}

export default NavItem;
