import { MemoryRouter } from "react-router-dom";
import RegisterForm from "../Form/RegisterForm";

export default {
  title: "Auth Pages/Register-Page",
};

export const Page = () => (
  <MemoryRouter>
    <RegisterForm />
  </MemoryRouter>
);
