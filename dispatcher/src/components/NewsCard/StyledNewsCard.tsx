import styled from "styled-components";
import { Colors } from "../../styles/Colors";

export const CardContainer = styled.div`
  display: flex;

  width: 870px;
  height: auto;
  align-items: center;
  margin: 12px 10px;
  background: white;
  border: 1px solid ${Colors.borderWhite};
  box-shadow: 0px 32px 64px rgba(0, 0, 0, 0.05);
  border-radius: 20px;

  @media (max-width: 1240px) {
    width: auto;
    height: auto;
  }
  @media (max-width: 650px) {
    flex-direction: column;
  }
`;

export const LoadingCardContainer = styled.div`
  display: flex;

  width: 670px;
  height: 250px;
  align-items: center;
  margin: 12px 10px;
  background: white;
  border: 1px solid ${Colors.borderWhite};
  box-shadow: 0px 32px 64px rgba(0, 0, 0, 0.05);
  border-radius: 20px;
  @media (max-width: 850px) {
    width: 100%;
    height: auto;
  }
  @media (max-width: 650px) {
    flex-direction: column;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;

  width: auto;
  height: 100%;
  @media (max-width: 650px) {
    width: 100%;
  }
`;
export const ArticleTop = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;
export const ArticleImg = styled.img`
  width: 245px;
  height: 242px;
  border: 1px solid ${Colors.borderWhite};
  box-sizing: border-box;
  border-radius: 20px 0px 0px 20px;
  object-fit: cover;

  @media (max-width: 650px) {
    height: 180px;
    width: 100%;
    border-radius: 20px 20px 0px 0px;
  }
`;
export const ArticleData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  padding: 0px 16px;
  height: inherit;
  width: 100%;
  @media (max-width: 650px) {
    width: inherit;
  }
`;
export const ArticleTitle = styled.h1`
  font-family: "Roboto";
  font-style: normal;
  font-weight: bold;
  font-size: 1em;
  margin-top: 5px;
  margin-bottom: 0px;
  line-height: 21px;
  color: ${Colors.textBlack};
`;
export const ArticleSubText = styled.h2`
  font-family: "Roboto";
  font-style: normal;
  font-weight: normal;
  font-size: 0.8em;
  margin-top: 5px;
  margin-bottom: 0px;
  line-height: 22px;
  color: ${Colors.inputPlaceholder};
`;
export const ArticleText = styled.h3`
  font-family: "Roboto";
  font-style: normal;
  font-weight: normal;
  font-size: 0.8em;
  margin-top: 5px;
  margin-bottom: 0px;
  line-height: 16px;
  color: ${Colors.textDarkBlue};
`;
export const CardButton = styled.div`
  margin: 10px;
  margin-left: auto;
  @media (max-width: 850px) {
    width: 100%;
  }
`;
