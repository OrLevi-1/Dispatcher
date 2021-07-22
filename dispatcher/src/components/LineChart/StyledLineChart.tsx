import styled from "styled-components";
import { Colors } from "../../styles/Colors";

export const ChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 412px;
  height: 300px;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 25px 15px 25px 25px;
  margin: 12px 8px;
  background: white;
  border: 1px solid ${Colors.borderWhite};
  box-sizing: border-box;
  box-shadow: 0px 32px 64px rgba(0, 0, 0, 0.05);
  border-radius: 20px;

  font-family: "Roboto";
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 12px;
  letter-spacing: 0.25px;
  color: ${Colors.textDarkBlue};

  @media (max-width: 1660px) {
    width: 320px;
  }
  @media (max-width: 1550px) {
    width: 250px;
  }
`;
export const ProgressContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0px;
  width: 100%;
  overflow: auto;
`;
export const LineDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  width: 100%;
  height: 12px;
  margin: 12px 0px;
`;
export const ProgressBar = styled.div`
  width: 50%;
  background-color: #f3f3ff;
  border-radius: 20px;
  margin: 0px 15px;
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
export const GraphHeader = styled.div`
  font-family: "Roboto";
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  margin-right: auto;
  color: ${Colors.textBlack};
`;
