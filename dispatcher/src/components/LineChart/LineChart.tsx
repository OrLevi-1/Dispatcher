import React from "react";
import { noDataChart } from "../../assets";

import {
  ChartContainer,
  GraphHeader,
  ProgressContainer,
  ChartNoData,
} from "./StyledLineChart";
import LineBar from "./LineBar";

export interface LineChartProps {
  isData?: boolean;
}

const data = [
  { name: "NBC", value: 40 },
  { name: "CNN", value: 30 },
  { name: "BBC", value: 20 },
  { name: "FOX", value: 50 },
  { name: "ABC", value: 10 },
  { name: "CBS", value: 60 },
];

const LineChart: React.FC<LineChartProps> = ({ isData = true }) => {
  return (
    <ChartContainer>
      <GraphHeader>Tags</GraphHeader>
      {isData ? (
        <ProgressContainer>
          {data.map((item, index) => (
            <LineBar key={index} name={item.name} value={item.value} />
          ))}
        </ProgressContainer>
      ) : (
        <ProgressContainer>
          <ChartNoData>
            <img src={noDataChart} />
            <a>No data to display</a>
          </ChartNoData>
        </ProgressContainer>
      )}
    </ChartContainer>
  );
};

export default LineChart;
