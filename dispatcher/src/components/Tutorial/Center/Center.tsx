import React from "react";
import "./Center.css";

interface CenterProps {}

export const Center: React.FC<CenterProps> = (props) => {
  return <div className="center">{props.children}</div>;
};
