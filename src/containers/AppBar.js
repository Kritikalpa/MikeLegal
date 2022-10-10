import "../styles/appbar.scss";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import Badge from "@mui/material/Badge";
import variables from "../utilities/_variables.scss";
import { Avatar } from "@mui/material";

function AppBar() {
  return (
    <div className="app-bar">
      <div>
        <div className="app-drawer">
          <MenuIcon
            sx={{
              color: variables.boldText,
            }}
          />
        </div>
        <div className="app-name">CRM Dash</div>
      </div>
      <div>
        <div>
          <Badge
            sx={{
              "& .MuiBadge-badge": {
                color: variables.blue,
                backgroundColor: variables.blue,
              },
            }}
            variant="dot"
            overlap="circular"
          >
            <NotificationsOutlinedIcon
              sx={{
                color: variables.boldText,
              }}
            />
          </Badge>
        </div>
        <div>
          <div>
            <Avatar sx={{ bgcolor: variables.pink, height: 24, width: 24, 'font-size': '0.9rem'}}>J</Avatar>
          </div>
          <div className="account-name">Jennie Thompson</div>
        </div>
      </div>
    </div>
  );
}

export default AppBar;
