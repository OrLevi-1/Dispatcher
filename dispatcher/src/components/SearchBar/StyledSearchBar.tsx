import styled from "styled-components";
import { Colors } from "../../styles/Colors";

export const SearchContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: white;
  border-radius: 10px;
  width: 630px;
  height: 50px;

  @media (max-width: 1000px) {
    width: 500px;
  }
`;
export const SearchInput = styled.input`
  height: 42px;
  width: 100%;
  border-color: transparent;
  border-radius: 0px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: normal;
  font-size: 1em;
  line-height: 22px;
  margin-right: 5px;
  display: flex;
  align-items: center;
  letter-spacing: 0.25px;

  color: ${Colors.textDarkBlue};
  &::placeholder {
    color: ${Colors.inputPlaceholder};
  }
  &:focus {
    outline: none;
  }
`;
export const SearchIcon = styled.img`
  width: 24px;
  height: 24px;
  padding: 0px 15px;
`;
export const SearchDivider = styled.div`
  width: 40px;
  opacity: 0.8;
  border: 0.5px solid ${Colors.borderWhite};
  transform: rotate(90deg);
`;
