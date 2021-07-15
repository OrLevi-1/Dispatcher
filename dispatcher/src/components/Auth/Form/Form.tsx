import {
  Container,
  Title,
  FormLine,
  Question,
  Divider,
} from "../../../styles/StyledComps";
import Inputs from "../Inputs/Inputs";
import BtnBlue from "../../Buttons/BtnBlue";
import GoogleBtn from "../Social/GoogleBtn";
import FbButton from "../Social/FbButton";

import React from "react";

export interface FormProps {}

const Form: React.FC<FormProps> = ({}) => (
  <Container>
    <Title>Welcome to Dispatcher</Title>
    <Inputs isLogin={false} />
    <FormLine>
      <BtnBlue BtnType="Auth" BtnText={"Login"} />
      <Question>Dont have a user yet? Register</Question>
    </FormLine>
    <Divider />
    <GoogleBtn />
    <FbButton />
  </Container>
);

export default Form;
