import React from "react";
import { GreyBtn, SocialImage, ButtonText } from "./StyledSocial";
import { googleLogo } from "../../../assets";

export interface GoogleBtnProps {}

const GoogleBtn: React.FC<GoogleBtnProps> = ({}) => {
  return (
    <GreyBtn>
      <SocialImage src={googleLogo} />
      <ButtonText>Continue With Google</ButtonText>
    </GreyBtn>
  );
};

export default GoogleBtn;
