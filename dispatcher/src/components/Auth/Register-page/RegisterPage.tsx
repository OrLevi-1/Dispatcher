import React from "react";
import { AuthPage } from "../../../styles/StyledComps";
import RegisterForm from "../Form/RegisterForm";
import Logo from "../Logo/Logo";

export interface RegisterPageProps {}

const RegisterPage: React.FC<RegisterPageProps> = ({}) => {
  return (
    <>
      <AuthPage>
        <Logo />
        <RegisterForm />
      </AuthPage>
    </>
  );
};

export default RegisterPage;
