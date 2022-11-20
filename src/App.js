import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./AppRouter";

import { createTheme, ThemeProvider } from "@mui/material";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import Topnav from "./components/TopNav";
import Sidenav from "./components/SideNav";

// #fb2f2f
// #2ffbfb
// #acfdfd

function App() {
  const theme = overrideTheme();

  const [active, setActive] = useState(true);

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Topnav setActive={setActive}></Topnav>
          <Sidenav active={active}></Sidenav>
          <AppRouter active={active}></AppRouter>
        </BrowserRouter>
      </ThemeProvider>
    </React.Fragment>
  );
}

function overrideTheme() {
  return createTheme({
    palette: {
      primary: {
        light: "#f75f5f",
        main: "#fb2f2f",
        dark: "#e52b2b",
        contrastText: "white",
      },
      secondary: {
        light: "#acfdfd",
        main: "#2ffbfb",
        dark: "#26bdbd",
        contrastText: "black",
      },
      plain: {
        light: "white",
        main: "white",
        dark: "white",
        contrastText: "black",
      },
    },
    components: {
      MuiToolbar: {
        styleOverrides: {
          dense: {
            height: 32,
            minHeight: 32,
          },
        },
      },
      MuiList: {
        styleOverrides: {
          root: {
            marginTop: 0,
            marginBottom: 0,
            paddingTop: 0,
            paddingBottom: 0,
          },
        },
      },
      MuiListItemIcon: {
        styleOverrides: { root: { minWidth: "36px" } },
      },
    },
  });
}

export default App;
