import { AuthPage } from "../../../styles/StyledComps";
import Logo from "../Logo/Logo";
import RegisterForm from "../Form/RegisterForm";

export default {
  title: "Auth Pages/Register-Page",
};

export const RegisterPage = () => (
  <>
    <AuthPage>
      <Logo />
      <RegisterForm />
    </AuthPage>
  </>
);
