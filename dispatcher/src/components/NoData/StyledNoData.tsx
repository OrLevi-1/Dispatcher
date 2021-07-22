import styled from "styled-components";
import { Colors } from "../../styles/Colors";

export const NoDataContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 82vh;
  width: auto;
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
export const NoDataBody = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 1000px;
  @media (max-width: 1350px) {
    width: 900px;
  }
  @media (max-width: 1260px) {
    width: 800px;
  }
  @media (max-width: 1160px) {
    width: 700px;
  }
  @media (max-width: 1050px) {
    width: 600px;
  }
  @media (max-width: 1000px) {
    width: 800px;
  }
  @media (max-width: 888px) {
    width: fit-content;
  }
`;
export const MainNoData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* width: 600px; */
  /* height: 150px; */
  width: 100%;
  font-family: "Roboto";
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 35px;
  text-align: center;

  color: ${Colors.textDarkBlue};
`;
export const NoDataImg = styled.img`
  display: flex;
  width: 133px;
  height: 133px;
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
export const TopBody = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 200px;
  margin-right: 200px;

  @media (max-width: 850px) {
    display: none;
  }
`;
