import {
  Container,
  Title,
  Question,
  FormLine,
  StyledLink,
} from "../../../styles/StyledComps";
import "typeface-roboto";
import Inputs from "../Inputs/Inputs";
import BtnBlue from "../../Buttons/BtnBlue";
import { Link } from "react-router-dom";

import React from "react";

export interface RegisterFormProps {}

const RegisterForm: React.FC<RegisterFormProps> = ({}) => (
  <Container>
    <Title>Register</Title>
    <Inputs isLogin={true} />
    <FormLine>
      <BtnBlue BtnType="Auth" BtnText={"Send Form"} />
      <StyledLink to="/Login">
        <Question>Already Have A User? Login</Question>
      </StyledLink>
    </FormLine>
  </Container>
);

export default RegisterForm;
