import React from "react";
import { AuthPage } from "../../../styles/StyledComps";
import Form from "../Form/Form";
import Logo from "../Logo/Logo";

export interface LoginPageProps {}

const LoginPage: React.FC<LoginPageProps> = ({}) => {
  return (
    <>
      <AuthPage>
        <Logo />
        <Form />
      </AuthPage>
    </>
  );
};

export default LoginPage;
