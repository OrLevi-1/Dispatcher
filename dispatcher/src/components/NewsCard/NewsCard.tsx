import React, { useEffect, useState } from "react";
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
import TopNews from "../../data/topHeadlines.json";

import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import NewsNoData from "../NoData/NewsNoData";
import { NewsBody } from "../Home/StyledHome";
import { getAllNews } from "../../services/EverythingService";
import { getTopNews } from "../../services/TopnewsService";

export interface NewsCardProps {}

interface NewsArticle {
  source: {
    id?: string | null;
    name?: string | null;
  };
  author?: string | null;
  title: string;
  description?: string | null;
  url: string;
  urlToImage?: string | null;
  publishedAt: string;
  content?: string | null;
}

const NewsCard: React.FC<NewsCardProps> = ({}) => {
  const filter = useSelector((state: RootState) => state.filter);
  const search = useSelector((state: RootState) => state.search);

  const [allNews, setAllNews] = useState<NewsArticle[]>([]);
  const [topNews, setTopNews] = useState<NewsArticle[]>([]);
  const [data, setData] = useState<NewsArticle[]>([]);

  const [filteredData, setFilteredData] = useState<NewsArticle[]>([]);

  const getNews = async () => {
    try {
      let all = await getAllNews().then((res) => {
        return res.data.articles;
      });
      let top = await getTopNews().then((res) => {
        return res.data.articles;
      });
      setAllNews(all);
      setTopNews(top);
    } catch (err) {
      console.log("Error", err);
    }
  };

  useEffect(() => {
    getNews();
  }, []);

  useEffect(() => {
    if (filter.mainFilter === "Everything") {
      setData(allNews);
    } else {
      setData(topNews);
    }
    setFilteredData(
      data.filter((val) =>
        val.title.toLowerCase().includes(search.searchTerm.toLowerCase())
      )
    );
  }, [data, filter, search]);

  const d = new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });

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
