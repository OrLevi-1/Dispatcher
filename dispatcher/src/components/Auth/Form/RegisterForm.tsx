import { Container, Title, Question, FormLine } from "./StyledForm";
import "typeface-roboto";
import Inputs from "../Inputs/Inputs";
import BtnBlue from "../../Buttons/BtnBlue";
import React from "react";
import { StyledLink } from "../../../styles/StyledComps";

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
