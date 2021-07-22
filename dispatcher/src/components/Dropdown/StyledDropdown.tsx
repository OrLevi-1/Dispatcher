import styled from "styled-components";
import { Colors } from "../../styles/Colors";
import { DropdownProps } from "./Dropdown";

export const DropBtn = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: white;
  font-family: "Roboto";
  color: ${Colors.textDarkBlue};
  font-size: 1rem;
  width: max-content;
  height: 50px;
  border: none;
  cursor: pointer;
  border-radius: 10px;

  &:hover {
    background-color: ${Colors.lightHoverGrey};
  }
  &:focus {
    background-color: ${Colors.lightHoverGrey};
  }
`;
export const DropdownDiv = styled.div`
  position: relative;
  display: inline-block;
  margin-right: ${(props: DropdownProps) => (props.isSearch ? "0px" : "10px")};
`;
export const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: white;
  min-width: 100%;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  border-radius: 10px;

  & a {
    color: ${Colors.textDarkBlue};
    font-size: 0.9em;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }

  &.show {
    display: flex;
    flex-direction: column;
    transition: 3ms;
  }
`;
export const DropdownItem = styled.a`
  background-color: white;
  color: white;
  padding: 16px;
  font-family: "Roboto";
  font-size: 1rem;
  border: none;
  cursor: pointer;
  border-radius: 10px;

  &:hover {
    background-color: ${Colors.darkHoverGrey};
  }
  &:focus {
    background-color: ${Colors.darkHoverGrey};
  }
`;
export const DownArrow = styled.img`
  flex: none;
  order: 2;
  flex-grow: 0;
  margin: 0px 16px;
`;
