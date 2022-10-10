import React, { useState } from "react";
import NavItem from "../components/NavItem";
import "../styles/navigationcontainer.scss";
import SwipeableDrawer from '@mui/material/SwipeableDrawer';

function NavigationContainer() {
  const [currentView, setCurrentView] = useState(0);
  const navRoutes = [
    {
      name: "Dashboard",
      icon: "PersonOutlineOutlined",
    },
    {
      name: "Help Desk",
      icon: "SupportAgentOutlined",
    },
    {
      name: "My Tasks",
      icon: "CalendarMonthOutlined",
    },
    {
      name: "Projects",
      icon: "ArticleOutlined",
    },
    {
      name: "Clients",
      icon: "GroupOutlined",
    },
    {
      name: "Invoice",
      icon: "ReceiptLongOutlined",
    },
    {
      name: "Reports",
      icon: "EqualizerOutlined",
    },
    {
      name: "Settings",
      icon: "SettingsOutlined",
    },
  ];
  return (
    <div className="navigation-container">
      {navRoutes.map((item, index) => {
        return (
          <NavItem
            key={`nav-items-${index}`}
            name={item.name}
            icon={item.icon}
            active={currentView === index}
            index={index}
            setCurrentView={setCurrentView}
          />
        );
      })}
    </div>
  );
}

export default NavigationContainer;
