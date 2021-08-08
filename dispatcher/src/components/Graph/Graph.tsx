import React from "react";
import {
  GraphCard,
  GraphHeader,
  GraphDetails,
  LeftColumn,
  RightColumn,
  ProgressContainer,
  ChartNoData,
  DetailsTable,
} from "./StyledGraph";

import { PieChart, Pie, Cell } from "recharts";
import { noDataChart } from "../../assets";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

export interface GraphProps {
  isData?: boolean;
}

// const data = [
//   { name: "BBC", value: 40 },
//   { name: "CNN", value: 30 },
//   { name: "ABC", value: 20 },
//   { name: "NBC", value: 50 },
// ];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#08483b"];

export const ReChart: React.FC = ({}) => {
  const data = useSelector((state: RootState) => state.filter.sourcesArray);
  return (
    <PieChart width={130} height={130}>
      <Pie
        data={data}
        cx={60}
        cy={60}
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

const Graph: React.FC<GraphProps> = ({ isData = true }) => {
  const data = useSelector((state: RootState) => state.filter.sourcesArray);
  return (
    <GraphCard>
      <GraphHeader>Sources</GraphHeader>
      {isData ? (
        <>
          <ReChart />
          <GraphDetails>
            <DetailsTable>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index}>
                    <LeftColumn>{item.name}</LeftColumn>
                    <RightColumn>{item.value}%</RightColumn>
                  </tr>
                ))}
              </tbody>
            </DetailsTable>
          </GraphDetails>
        </>
      ) : (
        <ProgressContainer>
          <ChartNoData>
            <img src={noDataChart} />
            <a>No data to display</a>
          </ChartNoData>{" "}
        </ProgressContainer>
      )}
    </GraphCard>
  );
};

export default Graph;
