import LogoutIcon from "@mui/icons-material/Logout";
import * as Icons from "@mui/icons-material";
import { tokens } from "../../theme.js";
import { MenuItem, Menu, SubMenu } from "react-pro-sidebar";
import { useAuth } from "../../context/AuthContext.jsx";
import { Box, Typography, useTheme } from "@mui/material";
import { useState, createElement } from "react";
import { Link } from "react-router-dom";

function SidebarContent() {
  // Styles from theme context, and icons to react
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  // logic
  const { logout, menu } = useAuth();
  const [isCollapsed] = useState(true);
  const menuP = [...new Map(menu.map((item) => [item.Titulo, item])).values()];
  const [selected] = useState();
  //return component
  return (
    <Box>
      <Box paddingLeft={isCollapsed ? undefined : "10%"}>
        <Menu>
          {menuP.map((menuItem) =>
            menuItem.bDropdown === 1 ? (
              <SubMenu
                icon={createElement(Icons[menuItem.Icono])}
                key={menuItem.idMenu}
                style={{
                  color: colors.sFive[500],
                }}
                title={menuItem.Titulo}
              >
                {menu
                  .filter((subMenu) => subMenu.idMenu === menuItem.idMenu)
                  .map((subMenu) => (
                    <MenuItem key={subMenu.idMenuHijo}>
                      {subMenu.TituloHijo}
                      <Link to={subMenu.PathHijo} />
                    </MenuItem>
                  ))}
              </SubMenu>
            ) : (
              <MenuItem
                key={menuItem.idMenu}
                style={{
                  color: colors.sFive[500],
                }}
                icon={createElement(Icons[menuItem.Icono])}
              >
                {menuItem.Titulo}
                <Link to={menuItem.Path} />
              </MenuItem>
            )
          )}
        </Menu>
      </Box>

      <Box
        sx={{
          position: "absolute",
          bottom: "0",
          left: "0",
          width: "100%",
        }}
      >
        <MenuItem
          style={{
            color: colors.sFive[500],
          }}
          icon={<LogoutIcon />}
          onClick={() => logout()}
        >
          <Typography>Cerrar sesión</Typography>
          <Link to="/login" />
        </MenuItem>
      </Box>
    </Box>
  );
}

export default SidebarContent;
