import React from "react";
import LineProgress from "./LineProgress";
import { LineDiv } from "../../styles/StyledComps";

export interface LineBarProps {
  name?: string;
  value?: number;
}

const LineBar: React.FC<LineBarProps> = (LineBarProps) => {
  return (
    <LineDiv>
      <div>{LineBarProps.name}</div>
      <div>{LineBarProps.value}%</div>
      <LineProgress value={LineBarProps.value} />
    </LineDiv>
  );
};

export default LineBar;
