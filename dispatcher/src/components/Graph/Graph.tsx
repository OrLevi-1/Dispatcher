import React from "react";
import {
  GraphCard,
  GraphHeader,
  GraphContainer,
} from "../../styles/StyledComps";

import { PieChart, Pie, Cell } from "recharts";

export interface GraphProps {}

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group D", value: 200 },
  { name: "Group E", value: 500 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#08483b"];

export const ReChart = ({}) => {
  return (
    <PieChart width={300} height={150}>
      <Pie
        data={data}
        cx={170}
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

const Graph: React.FC<GraphProps> = ({}) => {
  return (
    <GraphCard>
      <GraphHeader>Sources</GraphHeader>
      <ReChart />
      <GraphContainer>
        <ul>
          <li>NBC</li>
          <li>CNN</li>
          <li>ABC</li>
          <li>TBS</li>
        </ul>
        <ul>
          <li>15%</li>
          <li>35%</li>
          <li>20%</li>
          <li>35%</li>
        </ul>
      </GraphContainer>
    </GraphCard>
  );
};

export default Graph;
