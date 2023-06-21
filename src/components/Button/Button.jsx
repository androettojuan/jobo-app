import React from "react";
import { StyledButton } from "./Button.styles";

const Button = ({ children, onClick, size, color }) => {
  return (
    <StyledButton onClick={onClick} size={size} color={color}>
      {children}
    </StyledButton>
  );
};

export default Button;
