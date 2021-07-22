import styled from "styled-components";
import { Colors } from "../../../styles/Colors";

export const LogoIcon = styled.img`
  border-radius: 0px;
  @media (max-width: 850px) {
    width: 40%;
    height: 60%;
  }
`;
export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.logoBack};
  /* background-size: cover;
  background-repeat: no-repeat; */
  height: 100%;
  width: 35%;

  @media (max-width: 850px) {
    height: 30%;
    width: 100%;
  }
`;
