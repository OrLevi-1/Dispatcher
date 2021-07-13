import {
  Container,
  Title,
  Question,
  FormLine,
} from "../../../styles/StyledComps";
import "typeface-roboto";
import Inputs from "../Inputs/Inputs";
import { AuthBtn } from "../Auth-Buttons/AuthBtn";

import React from "react";

export interface RegisterFormProps {}

const RegisterForm: React.FC<RegisterFormProps> = ({}) => (
  <Container>
    <Title>Register</Title>
    <Inputs isLogin={true} />
    <FormLine>
      <AuthBtn BtnText={"Send Form"} />
      <Question>Already Have A User? Login</Question>
    </FormLine>
  </Container>
);

export default RegisterForm;
