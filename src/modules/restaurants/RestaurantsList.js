import { Box, Paper, Typography } from "@mui/material";

export default function RestaurantsList(props) {
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
        Restaurants
      </Typography>
      <Paper variant="outlined" sx={{ padding: 2, backgroundColor: "#2ffbfb" }}>
        <Typography sx={{ fontSize: "0.8rem", fontWeight: "bold" }}>
          DRAFT
        </Typography>
        <Typography sx={{ fontSize: "0.8rem" }}>
          This page shall serve the admin capabilities to override restaurant
          changes upon the request of the owners. However, there will also be a
          portal for owners to manage their listed restaurants.
        </Typography>
      </Paper>
    </Box>
  );
}
