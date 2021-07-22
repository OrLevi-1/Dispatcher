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
} from "./StyledNewsCard";
import CardTag from "../CardTag/CardTag";
import News from "../../data/news.json";

export interface NewsCardProps {}

const NewsCard: React.FC<NewsCardProps> = ({}) => {
  const data = News.articles;
  const d = new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });
  return (
    <>
      {data.map((article, index) => (
        <CardContainer key={index}>
          <ImageContainer>
            <ArticleImg src={article.urlToImage?.toString()} />
          </ImageContainer>
          <ArticleData>
            <ArticleTop>
              <ArticleSubText>
                {d.format(Date.parse(article.publishedAt))}
              </ArticleSubText>
              <CardTag />
            </ArticleTop>
            <ArticleTitle>{article.title}</ArticleTitle>
            <ArticleSubText>{article.source.name}</ArticleSubText>
            <ArticleText>{article.description}</ArticleText>
            <CardButton>
              <a href={article.url}>
                <BtnBlue BtnText="Navigate to Dispatch" />
              </a>
            </CardButton>
          </ArticleData>
        </CardContainer>
      ))}
    </>
  );
};

export default NewsCard;
