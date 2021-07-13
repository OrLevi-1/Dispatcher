import React from "react";
import { fbLogo } from "../../../assets";
import { GreyBtn, SocialImage, ButtonText } from "../../../styles/StyledComps";
export interface FbButtonProps {}

const FbButton: React.FC<FbButtonProps> = ({}) => {
  return (
    <GreyBtn>
      <SocialImage src={fbLogo} />
      <ButtonText>Continue With Facebook</ButtonText>
    </GreyBtn>
  );
};

export default FbButton;
