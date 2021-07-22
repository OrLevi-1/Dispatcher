import React from "react";
import { logo } from "../../../assets";
import { LogoIcon, LogoContainer } from "./StyledLogo";
export interface LogoProps {}

const Logo: React.FC<LogoProps> = ({}) => {
  return (
    <LogoContainer>
      <LogoIcon src={logo} />
    </LogoContainer>
  );
};

export default Logo;
