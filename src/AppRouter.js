import { Navigate, Route, Routes } from "react-router-dom";

import Overview from "./modules/dashboard/Overview";

export default function AppRouter(props) {
  return (
    <Routes>
      <Route exact path="/" element={<Navigate to="/dashboard" />} />
      <Route
        exact
        path="/dashboard"
        element={<Overview active={props.active} />}
      />
    </Routes>
  );
}
