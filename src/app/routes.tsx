import { Route, Routes } from "react-router-dom";
import { HomePage } from "@/pages/home-page";

export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
  </Routes>
);
