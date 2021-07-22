import styled from "styled-components";
import { Colors } from "../../styles/Colors";

export const TagContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const SingleTag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  height: 20px;
  border-radius: 20px;
  padding: 3px 10px 3px 10px;
  margin: 0px 5px;
  background-color: ${Colors.tagsGrey};

  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: ${Colors.textDarkBlue};
`;
