import styled from "styled-components";
import { Colors } from "../../styles/Colors";
import { BtnProps } from "./BtnBlue";

export const BlueBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 36px;
  padding: ${(props: BtnProps) =>
    props.BtnType === "Auth" ? "0px 15px" : "0px"};
  border: none;
  background: ${Colors.blue};
  border-radius: ${(props: BtnProps) =>
    props.BtnType === "Auth" ? "10px" : "20px"};

  @media (max-width: 850px) {
    width: 100%;
    padding: 0px;
  }
`;
export const Text = styled.h2`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 0.25px;
  text-transform: uppercase;
  padding: 0px 15px;
  color: white;
`;
export const Arrow = styled.img`
  margin-right: 10px;
`;
