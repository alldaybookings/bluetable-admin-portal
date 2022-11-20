import { Link } from "react-router-dom";
import "./../styles/sidenav.scss";

import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Avatar,
  Divider,
  Typography,
} from "@mui/material";
import { cyan } from "@mui/material/colors";

import DashboardIcon from "@mui/icons-material/Dashboard";
import DiningIcon from "@mui/icons-material/Dining";
import PeopleIcon from "@mui/icons-material/People";
import TableRestaurantIcon from "@mui/icons-material/TableRestaurant";
import EventIcon from "@mui/icons-material/Event";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";

export default function Sidenav(props) {
  const mainMenus = [
    {
      label: "Dashboard",
      link: `/dashboard`,
      icon_component: <DashboardIcon />,
    },
    {
      label: "Customers",
      link: `/customers`,
      icon_component: <DiningIcon />,
    },
    {
      label: "Owners",
      link: `/owners`,
      icon_component: <PeopleIcon />,
    },
    {
      label: "Restaurants",
      link: `/restaurants`,
      icon_component: <TableRestaurantIcon />,
    },
    {
      label: "Reservations",
      link: `/reservations`,
      icon_component: <EventIcon />,
    },
  ];

  const settingMenus = [
    {
      label: "System",
      link: `/system`,
      icon_component: <SettingsIcon />,
    },
    {
      label: "Logout",
      link: `/logout`,
      icon_component: <LogoutIcon />,
    },
  ];

  return (
    <Drawer
      anchor={"left"}
      variant="persistent"
      open={props.active}
      sx={{
        "& .MuiPaper-root": {
          top: {
            xs: 56,
            sm: 50,
          },
        },
      }}
    >
      <Box
        sx={{
          width: "100%",
          minWidth: "12rem",
          bgcolor: "background.paper",
        }}
      >
        <nav aria-label="main mailbox folders">
          <Box sx={{ display: "flex", padding: 2 }}>
            <Avatar sx={{ bgcolor: cyan[500] }}>JO</Avatar>
            <Box sx={{ marginLeft: 1 }}>
              <Typography sx={{ fontWeight: "bold", fontSize: "0.9rem" }}>
                John Doe
              </Typography>
              <Typography sx={{ fontSize: "0.7rem" }}>Administrator</Typography>
            </Box>
          </Box>
          <Divider />
          <Typography
            sx={{
              margin: 0,
              paddingTop: 2,
              paddingLeft: 2,
              fontSize: "0.6rem",
              fontWeight: "bold",
              color: "darkgray",
            }}
          >
            MENU
          </Typography>
          <List dense={true}>
            {mainMenus.map((menu, index) => (
              <ListItem disablePadding key={index}>
                <ListItemButton component={Link} to={menu.link}>
                  <ListItemIcon>{menu.icon_component}</ListItemIcon>
                  <ListItemText
                    primary={menu.label}
                    sx={{
                      ".MuiTypography-root": {
                        fontWeight: "bold",
                        transition: "all 0.2s ease",
                        ":hover": {
                          marginLeft: "2px",
                        },
                      },
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Typography
            sx={{
              margin: 0,
              paddingTop: 2,
              paddingLeft: 2,
              fontSize: "0.6rem",
              fontWeight: "bold",
              color: "darkgray",
            }}
          >
            SETTINGS
          </Typography>
          <List dense={true}>
            {settingMenus.map((menu, index) => (
              <ListItem disablePadding key={index}>
                <ListItemButton component={Link} to={menu.link}>
                  <ListItemIcon>{menu.icon_component}</ListItemIcon>
                  <ListItemText
                    primary={menu.label}
                    sx={{
                      ".MuiTypography-root": {
                        fontWeight: "bold",
                        transition: "all 0.2s ease",
                        ":hover": {
                          marginLeft: "2px",
                        },
                      },
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </nav>
      </Box>
    </Drawer>
  );
}
