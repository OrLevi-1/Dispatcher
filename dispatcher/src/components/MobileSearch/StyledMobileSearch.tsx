import styled from "styled-components";
import { Colors } from "../../styles/Colors";

export const MobileSearchMain = styled.div`
  display: flex;
  /* justify-content: flex-end; */
  position: absolute;
  left: 20%;
  width: 80%;
  height: 100vh;
  z-index: 1;
`;
export const MobileSearchContainer = styled.div`
  display: flex;
  background-color: ${Colors.backGroundMain};
  flex-direction: column;
  width: 100%;
`;
export const MobileSearchHeader = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 75px;
  background-color: white;
  border: 1px solid ${Colors.borderWhite};
  box-shadow: 0px 32px 64px rgba(0, 0, 0, 0.05);
`;
export const ArrowImg = styled.img`
  width: 30px;
  height: 20px;
  padding: 10px;
  margin: 0px 10px;
`;
export const CancelImg = styled.img`
  width: 15px;
  height: 15px;
  padding: 5px;
  margin-right: 10px;
`;
export const HistoryContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const RecentSearches = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  margin-top: 10px;
`;
export const RecentSearchesText = styled.h2`
  font-family: "Roboto";
  font-style: normal;
  font-weight: normal;
  font-size: 14px;

  display: flex;
  align-items: center;
  letter-spacing: 0.25px;
  margin: 0 20px;
  color: ${Colors.textDarkBlue};
`;
export const RecentSearchesButton = styled.div`
  font-family: "Roboto";
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  height: fit-content;
  display: flex;
  align-items: center;
  letter-spacing: 0.25px;
  padding: 10px 5px 10px 5px;
  margin: 0px 20px;
  background-color: ${Colors.borderWhite};
  color: ${Colors.textDarkBlue};
`;
export const HistoryDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
export const HistoryLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
export const HistoryText = styled.h3`
  font-family: "Roboto";
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 22px;

  display: flex;
  align-items: center;
  letter-spacing: 0.25px;
  padding: 0 20px;

  color: ${Colors.textDarkBlue};
`;
export const HistoryDelete = styled.img`
  display: flex;
  width: 12px;
  height: 12px;
  padding: 0 20px;
`;
export const HistoryDivider = styled.div`
  display: flex;
  justify-content: center;
  width: auto;
  opacity: 0.5;
  margin: 0 5px;
  border: 1px solid ${Colors.borderWhite};
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
