import { Route, Routes } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/Home";
import Destination from "../pages/Destination";
import Crew from "../pages/Crew";
import Technology from "../pages/Technology";

export default function RootRoute() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="/destination" element={<Destination />}></Route>
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
      </Route>
    </Routes>
  );
}
