import React from "react";
import {
  GraphCard,
  GraphHeader,
  GraphDetails,
  LeftColumn,
  RightColumn,
} from "../../styles/StyledComps";

import { PieChart, Pie, Cell } from "recharts";

export interface GraphProps {}

const data = [
  { name: "BBC", value: 40 },
  { name: "CNN", value: 30 },
  { name: "ABC", value: 20 },
  { name: "NBC", value: 50 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#08483b"];

export const ReChart = ({}) => {
  return (
    <PieChart width={200} height={150}>
      <Pie
        data={data}
        cx={100}
        cy={80}
        innerRadius={40}
        outerRadius={60}
        fill="#8884d8"
        paddingAngle={5}
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
};

const Graph: React.FC<GraphProps> = () => {
  return (
    <GraphCard>
      <GraphHeader>Sources</GraphHeader>
      <ReChart />
      <GraphDetails>
        <LeftColumn>
          {data.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
        </LeftColumn>
        <RightColumn>
          {data.map((item, index) => (
            <li key={index}>{item.value}%</li>
          ))}
        </RightColumn>
      </GraphDetails>
    </GraphCard>
  );
};

export default Graph;
