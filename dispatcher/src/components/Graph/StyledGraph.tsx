import styled from "styled-components";
import { Colors } from "../../styles/Colors";

export const GraphCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 412px;
  height: auto;
  align-items: center;
  padding: 25px 15px 25px 15px;
  margin: 12px 8px;
  background: white;
  border: 1px solid ${Colors.borderWhite};
  box-sizing: border-box;
  box-shadow: 0px 32px 64px rgba(0, 0, 0, 0.05);
  border-radius: 20px;
  @media (max-width: 1660px) {
    width: 320px;
  }
  @media (max-width: 1550px) {
    width: 250px;
  }
`;
export const GraphHeader = styled.div`
  font-family: "Roboto";
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  margin-right: auto;
  color: ${Colors.textBlack};
`;
export const DetailsTable = styled.table`
  margin-left: auto;
  margin-right: auto;
  table-layout: fixed;
  width: 100%;
`;
export const LeftColumn = styled.td`
  word-wrap: break-word;
  color: ${Colors.graphText};
  /* padding: 0px 20px; */
`;
export const RightColumn = styled.td`
  list-style-type: none;
  color: ${Colors.listGrey};
  text-align: right;
  word-break: break-all;
  /* padding: 0px 20px 0px 0px; */
`;
export const GraphDetails = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  font-family: "Mulish";
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 30px;

  letter-spacing: 0.2px;
`;
export const ProgressContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0px;
  width: 100%;
  overflow: auto;
`;
export const ChartNoData = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  font-family: "Roboto";
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 30px;
  margin: 10px 10px;
  text-align: center;

  color: ${Colors.textDarkBlue};
`;
