import React, { useState, useEffect } from "react";
import NavItem from "./NavItem";
import { Link, useLocation } from "react-router-dom";

function NavigationList() {
  const [currentView, setCurrentView] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const { pathname } = location;
    const idx = navRoutes.findIndex((item) => {
      return pathname.includes(item.name.replace(" ", "").toLowerCase());
    });
    if (idx !== -1) {
      setCurrentView(idx);
    }
  }, []);

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
    <div className="navigation-list">
      {navRoutes.map((item, index) => {
        return (
          <Link to={`/${item.name.replace(" ", "").toLowerCase()}`}>
            <NavItem
              key={`nav-items-${index}`}
              name={item.name}
              icon={item.icon}
              active={currentView === index}
              index={index}
              setCurrentView={setCurrentView}
            />
          </Link>
        );
      })}
    </div>
  );
}

export default NavigationList;
