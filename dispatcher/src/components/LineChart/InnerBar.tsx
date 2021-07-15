import React from "react";
import styled from "styled-components";

export interface InnerBarProps {
  value?: number;
}

export const InnerBarDiv = styled.div`
  width: ${(props: InnerBarProps) => props.value}%;
  background-color: #0058b9;
  border-radius: 20px;
  height: 100%;
`;

const InnerBar: React.FC<InnerBarProps> = (InnerBarProps) => {
  return <InnerBarDiv value={InnerBarProps.value} />;
};
export default InnerBar;
