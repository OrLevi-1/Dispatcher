import React from "react";
import { notFoundImg } from "../../assets";
import {
  GraphsBody,
  MainDropDowns,
  MainNoData,
  NoDataBody,
  NoDataContainer,
  NoDataImg,
  TopBody,
  WideDivider,
} from "../../styles/StyledComps";
import Dropdown from "../Dropdown/Dropdown";
import FilterMobile from "../FilterMobile/FilterMobile";
import Graph from "../Graph/Graph";
import Header from "../Header/Header";
import LineChart from "../LineChart/LineChart";

interface NoDataProps {}

const NoData: React.FC<NoDataProps> = ({}) => {
  return (
    <>
      <Header />
      <TopBody>
        <MainDropDowns>
          <Dropdown isSearch={false} withArrow={true} />
          <Dropdown isSearch={false} withArrow={true} />
          <Dropdown isSearch={false} withArrow={true} />
          <Dropdown isSearch={false} withArrow={true} />
        </MainDropDowns>
        <WideDivider />
      </TopBody>
      <FilterMobile />
      <NoDataContainer>
        <NoDataBody>
          <MainNoData>
            <NoDataImg src={notFoundImg} />
            <a>We couldn't find any matches for your query</a>
          </MainNoData>
        </NoDataBody>
        <GraphsBody>
          <Graph isData={false} />
          <LineChart isData={false} />
        </GraphsBody>
      </NoDataContainer>
    </>
  );
};

export default NoData;
