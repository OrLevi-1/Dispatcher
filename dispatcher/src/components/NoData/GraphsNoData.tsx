import React from "react";

import Graph from "../Graph/Graph";
import LineChart from "../LineChart/LineChart";
import { NoDataContainer, GraphsBody } from "./StyledNoData";

export interface GraphsNoDataProps {}

const GraphsNoData: React.FC<GraphsNoDataProps> = ({}) => {
  return (
    <>
      <NoDataContainer>
        <GraphsBody>
          <Graph isData={false} />
          <LineChart isData={false} />
        </GraphsBody>
      </NoDataContainer>
    </>
  );
};

export default GraphsNoData;
