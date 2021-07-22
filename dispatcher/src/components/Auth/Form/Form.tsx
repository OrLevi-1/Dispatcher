import { Container, Title, FormLine, Question, Divider } from "./StyledForm";
import Inputs from "../Inputs/Inputs";
import BtnBlue from "../../Buttons/BtnBlue";
import GoogleBtn from "../Social/GoogleBtn";
import FbButton from "../Social/FbButton";
import React from "react";
import { LoginLink, StyledLink } from "../../../styles/StyledComps";

export interface FormProps {}

const Form: React.FC<FormProps> = ({}) => {
  return (
    <Container>
      <Title>Welcome to Dispatcher</Title>
      <Inputs isLogin={false} />
      <FormLine>
        <LoginLink to="/Home">
          <BtnBlue BtnType="Auth" BtnText={"Login"} />
        </LoginLink>
        <StyledLink to="/Register">
          <Question>Dont have a user yet? Register</Question>
        </StyledLink>
      </FormLine>
      <Divider />
      <GoogleBtn />
      <FbButton />
    </Container>
  );
};

export default Form;
