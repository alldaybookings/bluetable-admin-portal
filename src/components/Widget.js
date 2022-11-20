import { Box, Grid, Paper, Typography } from "@mui/material";

export default function Widget(props) {
  return (
    <Box>
      <Paper
        elevation={2}
        sx={{
          padding: 2,
          transition: "all 0.2s ease",
          ":hover": {
            backgroundColor: "whitesmoke",
          },
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Box>
              <Typography sx={{ fontSize: "0.9rem", fontWeight: "bold" }}>
                {props.title}
              </Typography>
              <Typography sx={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                {props.figure}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box>{props.icon}</Box>
          </Grid>
          <Grid item xs={12}>
            <Box sx={{ display: "flex" }}>
              <Typography
                sx={{
                  padding: "2px 5px",
                  borderRadius: 1,
                  backgroundColor: props.percentColor,
                  fontSize: "0.9rem",
                  fontWeight: "bold",
                  color: props.percentFontColor,
                }}
              >
                {props.percent}
              </Typography>
              <Typography
                sx={{
                  paddingTop: "4px",
                  paddingLeft: 1,
                  fontSize: "0.7rem",
                }}
              >
                from previous month
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}
