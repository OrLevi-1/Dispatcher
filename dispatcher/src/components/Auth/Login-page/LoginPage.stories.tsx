import { MemoryRouter } from "react-router-dom";
import LoginPage from "./LoginPage";

export default {
  title: "Auth Pages/Login-Page",
};

export const Page = () => (
  <MemoryRouter>
    <LoginPage />
  </MemoryRouter>
);
