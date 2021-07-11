import React from "react";
import "./Input.css";

export interface InputProps {
  size: string;
  placeholder: string;
}

const Input: React.FC<InputProps> = (props) => {
  const { size = "medium", ...rest } = props;

  return <input className={`input ${props.size}`} {...rest} />;
};

export default Input;
