import styled from "styled-components";
import { Colors } from "../../styles/Colors";
import { HomeProps } from "./Home";

export const MainBody = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 82vh;
  width: fit-content;
  margin-left: 176px;
  padding: 0 16px;
  overflow-y: scroll;
  @media (max-width: 1450px) {
    margin-left: 48px;
  }
  @media (max-width: 850px) {
    margin-left: 0px;
  }
`;
export const TopBody = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 200px;
  margin-right: 200px;

  @media (max-width: 850px) {
    display: none;
  }
`;
export const NewsBody = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
`;
export const GraphsBody = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  @media (max-width: 1000px) {
    display: none;
  }
`;
export const WideDivider = styled.div`
  width: 1440px;
  height: 0px;
  opacity: 1;
  border: 1px solid ${Colors.borderWhite};
  margin-top: 20px;
  @media (max-width: 1660px) {
    width: 1350px;
  }
  @media (max-width: 1550px) {
    width: 1280px;
  }
  @media (max-width: 1450px) {
    width: 100%;
  }
`;
export const MainDropDowns = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-self: flex-start;
  width: fit-content;
  margin-top: 20px;
  background-color: ${Colors.backGroundMain};
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
export const SearchFilterMask = styled.div`
  display: flex;
  justify-content: flex-end;
  position: absolute;
  left: 0%;
  width: 20%;
  height: 100vh;
  z-index: 1;
  background-color: #0000007a;
`;
export const SearchTransition = styled.div`
  display: flex;
  justify-content: flex-end;
  position: fixed;
  left: ${(props: HomeProps) => (props.isSearch === true ? "0%" : "100%")};
  width: 100%;
  height: 100vh;
  z-index: 1;
  transition: 500ms;
`;
export const FilterTransition = styled.div`
  display: flex;
  justify-content: flex-end;
  position: fixed;
  left: ${(props: HomeProps) => (props.isFilter === true ? "0%" : "100%")};
  width: 100%;
  height: 100vh;
  z-index: 1;
  transition: 500ms;
`;
