import { useState } from "react";
import React from "react";
import { ProSidebar, Menu, MenuItem} from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme.js";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

import { useAuth } from "../../context/AuthContext.jsx";
import SidebarContent from "./SidebarContent.jsx";

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const { user } = useAuth();
  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.orange[500]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#F0F0F0 !important",
        },
        "& .pro-menu-item.active": {
          color: "#FFFFFF !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.greytwo[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Box display="flex" justifyContent="center" alignItems="center">
                  <img
                    alt="logo"
                    width="100%"
                    height="100px"
                    src={`/Logo_Positivo.png`}
                    style={{ cursor: "pointer", borderRadius: "50%" }}
                    sx={{ right: "0" }}
                  />
                </Box>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>
          {!isCollapsed && (
            <Box mb="25px">
              <Box textAlign="center">
                <Typography
                  variant="h3"
                  color={colors.greytwo[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  {user.Nombre}
                </Typography>
                <Typography variant="h5" color={colors.greytwo[400]}>
                  {user.Departamento}
                </Typography>
              </Box>
            </Box>
          )}
          <SidebarContent />
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
