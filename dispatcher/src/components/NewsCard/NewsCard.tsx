import React from "react";
import BtnBlue from "../Buttons/BtnBlue";
import {
  CardContainer,
  ImageContainer,
  ArticleImg,
  ArticleData,
  ArticleSubText,
  ArticleText,
  ArticleTitle,
  CardButton,
  ArticleTop,
} from "../../styles/StyledComps";
import CardTag from "../CardTag/CardTag";
export interface NewsCardProps {}

const NewsCard: React.FC<NewsCardProps> = ({}) => {
  return (
    <CardContainer>
      <ImageContainer>
        <ArticleImg
          src={
            "https://images.macrumors.com/t/uGZEsAiPbvD0wqiL5m6lE9b-Ixw=/2344x/https://images.macrumors.com/article-new/2021/01/Flat-2021-MacBook-Pro-Mockup-Feature-1.jpg"
          }
        />
      </ImageContainer>
      <ArticleData>
        <ArticleTop>
          <ArticleSubText>Friday, Jun 25, 2021</ArticleSubText>
          <CardTag></CardTag>
        </ArticleTop>
        <ArticleTitle>
          End of the world because everyone is playing fortnite all the time
        </ArticleTitle>
        <ArticleSubText>Or Levi</ArticleSubText>
        <ArticleText>
          It was almost every kind of modern-day financial swindle rolled into
          one.The mastermind behind an elaborate stolen credit-card scam that
          used bitcoin, burner phones and digital wallets such as Apple … [+3413
          chars]
        </ArticleText>
        <CardButton>
          <BtnBlue BtnText="Navigate to Dispatch" />
        </CardButton>
      </ArticleData>
    </CardContainer>
  );
};

export default NewsCard;
