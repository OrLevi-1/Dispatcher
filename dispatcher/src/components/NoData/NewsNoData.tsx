import React from "react";
import { notFoundImg } from "../../assets";
import {
  NoDataContainer,
  NoDataBody,
  MainNoData,
  NoDataImg,
} from "./StyledNoData";

export interface NewsNoDataProps {}

const NewsNoData: React.FC<NewsNoDataProps> = ({}) => {
  return (
    <>
      <NoDataContainer>
        <NoDataBody>
          <MainNoData>
            <NoDataImg src={notFoundImg} />
            <a>We couldn't find any matches for your query</a>
          </MainNoData>
        </NoDataBody>
      </NoDataContainer>
    </>
  );
};

export default NewsNoData;
