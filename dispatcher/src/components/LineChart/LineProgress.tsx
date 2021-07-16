import React from "react";
import InnerBar from "./InnerBar";
import { ProgressBar } from "../../styles/StyledComps";

interface LineProgressProps {
  value?: number;
}

const LineProgress: React.FC<LineProgressProps> = (LineProgressProps) => {
  return (
    <ProgressBar>
      <InnerBar value={LineProgressProps.value} />
    </ProgressBar>
  );
};

export default LineProgress;
