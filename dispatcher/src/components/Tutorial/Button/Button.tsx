import React from "react";
import "./Button.css";

export interface ButtonProps {
  variant?: string;
  children: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = (props) => {
  const { variant = "primary", children, ...rest } = props;

  return (
    <button className={`button ${props.variant}`} {...rest}>
      {props.children}
    </button>
  );
};

export default Button;
