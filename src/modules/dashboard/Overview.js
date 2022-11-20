import { Box, Grid, Typography } from "@mui/material";
import { cyan } from "@mui/material/colors";

import DiningIcon from "@mui/icons-material/Dining";
import PeopleIcon from "@mui/icons-material/People";
import TableRestaurantIcon from "@mui/icons-material/TableRestaurant";
import EventIcon from '@mui/icons-material/Event';

import Widget from "../../components/Widget";

export default function Overview(props) {
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
        Dashboard
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Widget
            title="CUSTOMERS"
            figure="249"
            percent="+11%"
            percentColor={cyan[300]}
            percentFontColor="white"
            icon={<DiningIcon sx={{ fontSize: "4rem", color: cyan[300] }} />}
          ></Widget>
        </Grid>
        <Grid item xs={4}>
          <Widget
            title="OWNERS"
            figure="21"
            percent="+5%"
            percentColor={cyan[300]}
            percentFontColor="white"
            icon={<PeopleIcon sx={{ fontSize: "4rem", color: cyan[300] }} />}
          ></Widget>
        </Grid>
        <Grid item xs={4}>
          <Widget
            title="RESTAURANTS"
            figure="122"
            percent="+23%"
            percentColor={cyan[300]}
            percentFontColor="white"
            icon={<TableRestaurantIcon sx={{ fontSize: "4rem", color: cyan[300] }} />}
          ></Widget>
        </Grid>
        <Grid item xs={4}>
          <Widget
            title="RESERVATIONS"
            figure="92"
            percent="+15%"
            percentColor={cyan[300]}
            percentFontColor="white"
            icon={<EventIcon sx={{ fontSize: "4rem", color: cyan[300] }} />}
          ></Widget>
        </Grid>
      </Grid>
    </Box>
  );
}
