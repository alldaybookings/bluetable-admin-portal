import { useEffect, useState } from "react";

import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

export default function Topnav({ setActive }) {
  const [topNavState, setTopNavState] = useState(true);
  
  useEffect(() => {
    setActive(topNavState);
  }, [topNavState]);

  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="fixed">
      <Box sx={{ px: 2 }}>
        <Toolbar disableGutters variant="dense">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 1 }}
            onClick={() => setTopNavState(!topNavState)}
          >
            <MenuIcon />
          </IconButton>
          <Typography sx={{ flexGrow: 1, fontSize: 16 }}>
            BlueTable Management System
          </Typography>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem
              onClick={handleClose}
              sx={{ fontSize: "0.9rem", fontWeight: "bold" }}
            >
              Profile
            </MenuItem>
            <MenuItem
              onClick={handleClose}
              sx={{ fontSize: "0.9rem", fontWeight: "bold" }}
            >
              My Restaurant
            </MenuItem>
          </Menu>
        </Toolbar>
      </Box>
    </AppBar>
  );
}
