
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import "../styles/globals.css";

export const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};
