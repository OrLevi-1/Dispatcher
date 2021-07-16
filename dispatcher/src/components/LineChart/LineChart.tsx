import React from "react";

import {
  ChartContainer,
  GraphHeader,
  ProgressContainer,
} from "../../styles/StyledComps";
import LineBar from "./LineBar";

export interface LineChartProps {}

const data = [
  { name: "NBC", value: 40 },
  { name: "CNN", value: 30 },
  { name: "BBC", value: 20 },
  { name: "FOX", value: 70 },
  { name: "FOX", value: 50 },
  { name: "FOX", value: 50 },
  { name: "FOX", value: 50 },
  { name: "FOX", value: 50 },
  { name: "FOX", value: 50 },
  { name: "FOX", value: 50 },
  { name: "FOX", value: 50 },
  { name: "FOX", value: 50 },
  { name: "FOX", value: 50 },
  { name: "FOX", value: 50 },
  { name: "FOX", value: 50 },
  { name: "FOX", value: 50 },
];

const LineChart: React.FC<LineChartProps> = ({}) => {
  return (
    <ChartContainer>
      <GraphHeader>Tags</GraphHeader>
      <ProgressContainer>
        {data.map((item) => (
          <LineBar name={item.name} value={item.value} />
        ))}
      </ProgressContainer>
    </ChartContainer>
  );
};

export default LineChart;
