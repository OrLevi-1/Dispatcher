import React from "react";
import {
  InputList,
  Input,
  InputText,
  Asterisk,
  InputLine,
} from "./StyledInputs";
import { asterisk } from "../../../assets";

export interface InputsProps {
  isLogin?: boolean;
}

const Inputs: React.FC<InputsProps> = ({ isLogin }) => {
  return (
    <InputList>
      {isLogin && (
        <>
          <InputLine>
            <InputText>First Name</InputText> <Asterisk src={asterisk} />
          </InputLine>
          <Input />
          <InputLine>
            <InputText>Last Name</InputText> <Asterisk src={asterisk} />
          </InputLine>
          <Input />
        </>
      )}
      <InputLine>
        <InputText>Email Address</InputText>{" "}
        {isLogin && <Asterisk src={asterisk} />}
      </InputLine>
      <Input />
      <InputLine>
        <InputText>Password</InputText> {isLogin && <Asterisk src={asterisk} />}
      </InputLine>
      <Input />
    </InputList>
  );
};

export default Inputs;
