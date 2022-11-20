import { Navigate, Route, Routes } from "react-router-dom";

import Overview from "./modules/dashboard/Overview";
import CustomersList from "./modules/customers/CustomersList";
import OwnersList from "./modules/owners/OwnersList";
import RestaurantsList from "./modules/restaurants/RestaurantsList";
import ReservationsList from "./modules/reservations/ReservationsList";
import SystemSettings from "./modules/settings/SystemSettings";

export default function AppRouter(props) {
  return (
    <Routes>
      <Route exact path="/" element={<Navigate to="/dashboard" />} />
      <Route
        exact
        path="/dashboard"
        element={<Overview active={props.active} />}
      />
      <Route
        exact
        path="/customers"
        element={<CustomersList active={props.active} />}
      />
      <Route
        exact
        path="/owners"
        element={<OwnersList active={props.active} />}
      />
      <Route
        exact
        path="/restaurants"
        element={<RestaurantsList active={props.active} />}
      />
      <Route
        exact
        path="/reservations"
        element={<ReservationsList active={props.active} />}
      />
      <Route
        exact
        path="/system"
        element={<SystemSettings active={props.active} />}
      />
    </Routes>
  );
}
