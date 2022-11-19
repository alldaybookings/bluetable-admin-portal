import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./AppRouter";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import Topnav from "./components/TopNav";

function App() {
  const [active, setActive] = useState(true);

  return (
    <React.Fragment>
      <BrowserRouter>
        <Topnav setActive={setActive}></Topnav>
        <AppRouter></AppRouter>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
