import React from "react";
import { arrow } from "../../../assets";
import { BlueBtn, Text, Arrow } from "../../../styles/StyledComps";
export interface BtnProps {
  BtnText: string;
}

export const AuthBtn: React.FC<BtnProps> = ({ BtnText }) => {
  return (
    <BlueBtn>
      <Text>{BtnText}</Text>
      {BtnText !== "Login" && <Arrow src={arrow} />}
    </BlueBtn>
  );
};

export default AuthBtn;
