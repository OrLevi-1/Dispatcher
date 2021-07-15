import { AuthPage } from "../../../styles/StyledComps";
import Form from "../Form/Form";
import Logo from "../Logo/Logo";

export default {
  title: "Auth Pages/Login-Page",
};

export const LoginPage = () => (
  <>
    <AuthPage>
      <Logo />
      <Form />
    </AuthPage>
  </>
);
