import { Route, Routes } from "react-router-dom";
import { ToDoPage } from "@/pages/to-do.tsx";

export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<ToDoPage />} />
  </Routes>
);
