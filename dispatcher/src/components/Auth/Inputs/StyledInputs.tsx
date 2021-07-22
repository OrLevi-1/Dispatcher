import styled from "styled-components";
import { Colors } from "../../../styles/Colors";

export const InputList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const Input = styled.input`
  padding: 8px;
  background: white;
  border: 1px solid ${Colors.borderWhite};
  border-radius: 10px;
`;
export const InputText = styled.h2`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;

  letter-spacing: 0.25px;
  color: ${Colors.textDarkBlue};
`;
export const Asterisk = styled.img`
  width: 2%;
  height: 2%;
  padding: 4px;
  @media (max-width: 850px) {
    width: 5%;
    height: 15%;
    padding: 0px;
  }
`;
export const InputLine = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
