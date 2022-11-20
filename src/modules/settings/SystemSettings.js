import { Box, Grid, Paper, Typography } from "@mui/material";
import { cyan } from "@mui/material/colors";

import DiningIcon from "@mui/icons-material/Dining";
import PeopleIcon from "@mui/icons-material/People";
import TableRestaurantIcon from "@mui/icons-material/TableRestaurant";
import EventIcon from "@mui/icons-material/Event";

import Widget from "../../components/Widget";

export default function SystemSettings(props) {
  return (
    <Box
      sx={{
        mt: { xs: 2, sm: 8 },
        ml: { xs: 2, md: props.active ? 25 : 2 },
        mr: 3,
        transition: "margin-left 0.2s",
      }}
    >
      <Typography
        component="h1"
        sx={{ fontSize: "1.2rem", fontWeight: "bold" }}
      >
        System Settings
      </Typography>
      <Paper variant="outlined" sx={{ padding: 2, backgroundColor: "#2ffbfb" }}>
        <Typography sx={{ fontSize: "0.8rem", fontWeight: "bold" }}>
          DRAFT
        </Typography>
        <Typography sx={{ fontSize: "0.8rem" }}>
          System settings goes here.
        </Typography>
      </Paper>
    </Box>
  );
}
