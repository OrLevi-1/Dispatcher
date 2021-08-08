import React from "react";

import FilterMobile from "../FilterMobile/FilterMobile";
import Header from "../Header/Header";
import NewsNoData from "./NewsNoData";
import GraphsNoData from "./GraphsNoData";

interface NoDataProps {}

const NoData: React.FC<NoDataProps> = ({}) => {
  return (
    <>
      <Header onSearchClick={() => {}} />
      <FilterMobile onFilterClick={() => {}} />
      <NewsNoData />
      <GraphsNoData />
    </>
  );
};

export default NoData;
