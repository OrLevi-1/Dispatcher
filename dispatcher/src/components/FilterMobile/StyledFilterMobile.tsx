import styled from "styled-components";
import { Colors } from "../../styles/Colors";

export const FilterMobileContainer = styled.div`
  display: flex;
  position: absolute;
  left: ${(props) => (props === "hidden" ? "100%" : "20%")};
  width: 80%;
  height: 100%;
  z-index: 1;
  flex-direction: column;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  letter-spacing: 0.25px;
  background-color: white;
  color: ${Colors.textDarkBlue};
`;
export const FilterTitle = styled.a`
  margin: 20px 15px;
`;
export const FilterText = styled.a`
  font-weight: normal;
  font-size: 14px;
  margin: 20px 15px;
`;
export const FilterSubText = styled.a`
  display: flex;
  align-items: center;
  font-weight: normal;
  font-size: 14px;
  margin: 20px 25px;
  color: ${Colors.inputPlaceholder};
`;
export const FilterSelection = styled.div`
  display: flex;
  margin-right: 10px;
`;
export const FilterLine = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;
export const FullDivider = styled.div`
  width: 100%;
  height: 0px;
  opacity: 1;
  border: 1px solid ${Colors.borderWhite};
`;
export const FilterBackArrow = styled.img`
  padding-right: 15px;
`;
export const FilterContainer = styled.div`
  display: none;
  padding: 0px 10px;
  @media (max-width: 850px) {
    display: flex;
    justify-content: space-between;
    background-color: white;
    align-items: center;
  }
`;
