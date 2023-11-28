// "use client";
import React from "react";
import { Button as BootstrapButton } from "react-bootstrap";

interface ButtonProps {
  classes?: string;
  value: string;
  handleClick: () => void;
}

const Button: React.FC<ButtonProps> = ({
  classes,
  value,
  handleClick,
}: ButtonProps) => {
  return (
    <BootstrapButton variant={classes} onClick={handleClick}>
      {value}
    </BootstrapButton>
  );
};

export default Button;
