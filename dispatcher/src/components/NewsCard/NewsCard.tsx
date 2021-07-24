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

import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import NewsNoData from "../NoData/NewsNoData";
import { NewsBody } from "../Home/StyledHome";

export interface NewsCardProps {}

const NewsCard: React.FC<NewsCardProps> = ({}) => {
  const data = News.articles;
  const d = new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });

  const search = useSelector((state: RootState) => state.search);
  const filteredData = data.filter((val) =>
    val.title.toLowerCase().includes(search.searchTerm.toLowerCase())
  );

  return (
    <>
      {filteredData.length > 0 ? (
        filteredData.map((article, index) => (
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
        ))
      ) : (
        <NewsBody>
          <NewsNoData />
        </NewsBody>
      )}
    </>
  );
};

export default NewsCard;
