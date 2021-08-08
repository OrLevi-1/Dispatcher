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
  LoadingCardContainer,
} from "./StyledNewsCard";
import CardTag from "../CardTag/CardTag";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import NewsNoData from "../NoData/NewsNoData";
import { NewsBody } from "../Home/StyledHome";
import { getAllNews, getCustomArray } from "../../services/EverythingService";
import { getTopNews, getCustomTopArray } from "../../services/TopnewsService";
import { filterActions } from "../../store/filter";
import { notFoundImg } from "../../assets";

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
  const filterArray = useSelector(
    (state: RootState) => state.filter.filterArray
  );

  const [allNews, setAllNews] = useState<NewsArticle[]>([]);
  const [topNews, setTopNews] = useState<NewsArticle[]>([]);
  const [data, setData] = useState<NewsArticle[]>([]);
  const dispatch = useDispatch();
  const sources = useSelector((state: RootState) => state.filter.sourcesArray);
  const [isLoading, setLoading] = useState(false);

  const [filteredData, setFilteredData] = useState<NewsArticle[]>([]);

  const getEverythingNews = async () => {
    try {
      let all = await getAllNews().then((res) => {
        return res.data.articles;
      });
      setAllNews(all);
      setLoading(false);
    } catch (err) {
      console.log("Error", err);
    }
  };
  const getHeadlinesNews = async () => {
    try {
      let top = await getTopNews().then((res) => {
        return res.data.articles;
      });
      setTopNews(top);
      setLoading(false);
    } catch (err) {
      console.log("Error", err);
    }
  };
  const getFilteredAllNews = async () => {
    try {
      let all = await getCustomArray(filterArray).then((res) => {
        return res!.data.articles;
      });
      setAllNews(all);
      setLoading(false);
    } catch (err) {
      console.log("Error", err);
    }
  };
  const getFilteredTopNews = async () => {
    try {
      let top = await getCustomTopArray(filterArray).then((res) => {
        return res!.data.articles;
      });
      setTopNews(top);
      setLoading(false);
    } catch (err) {
      console.log("Error", err);
    }
  };

  useEffect(() => {
    setLoading(true);
    const identifier = setTimeout(() => {
      if (filterArray.length > 0 && filter.mainFilter === "Everything") {
        getFilteredAllNews();
      }
      if (filterArray.length > 0 && filter.mainFilter === "Top Headlines") {
        getFilteredTopNews();
      }
    }, 1000);
    return () => {
      clearTimeout(identifier);
    };
  }, [filter.mainFilter, filterArray]);

  useEffect(() => {
    setLoading(true);
    if (filter.mainFilter === "Everything") getEverythingNews();
    if (filter.mainFilter === "Top Headlines") getHeadlinesNews();
  }, [filter.mainFilter]);

  useEffect(() => {
    setLoading(true);
    const identifier = setTimeout(() => {
      if (filter.mainFilter === "Everything") {
        setData(allNews);
      } else {
        setData(topNews);
      }

      // setFilteredData(
      //   data.filter((val) =>
      //     val.title.toLowerCase().includes(search.searchTerm.toLowerCase())
      //   )
      // );
      setLoading(false);
    }, 500);

    return () => {
      clearTimeout(identifier);
    };
  }, [data, allNews, topNews, filter, search]);

  interface source {
    name?: string;
    value?: number;
  }
  useEffect(() => {
    const sourcesArray: source[] = [];
    let sum = 0;
    data.map((article) => {
      const name = article.source.name?.toString();
      sum++;
      if (
        sourcesArray.some((val) => {
          return val.name === name;
        })
      ) {
        sourcesArray.forEach((k) => {
          if (k.name === name) {
            k.value!++;
          } else {
          }
        });
      } else {
        let a: source = {};
        a.name = name!;
        a.value = 1;
        sourcesArray.push(a);
      }
    });
    sourcesArray.forEach((source) => {
      source.value = (source.value! / sum) * 100;
    });
    sourcesArray.sort((a, b) => b.value! - a.value!);
    dispatch(filterActions.setSourceArray(sourcesArray));
    // console.log("sources", sourcesArray);
    // console.log("sourcesRedux", sources);
  }, [data, allNews, topNews]);

  const d = new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });

  return (
    <>
      {data.length > 0 ? (
        data.map((article, index) => (
          <CardContainer key={index}>
            <ImageContainer>
              <ArticleImg src={article.urlToImage?.toString()} />
            </ImageContainer>
            <ArticleData>
              <ArticleTop>
                <ArticleSubText>
                  {d.format(Date.parse(article.publishedAt))}
                </ArticleSubText>
                <CardTag
                  mainTag={filter.mainFilter}
                  subTag={article.source.name!}
                />
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
        <>
          {isLoading ? (
            <LoadingCardContainer>
              <ArticleData>
                <ArticleTop>
                  <ArticleSubText>&nbsp; Loading...</ArticleSubText>
                </ArticleTop>
                <ArticleTitle>&nbsp; Loading...</ArticleTitle>
              </ArticleData>
            </LoadingCardContainer>
          ) : (
            <NewsBody>
              <NewsNoData />
            </NewsBody>
          )}
        </>
      )}
    </>
  );
};

export default NewsCard;
