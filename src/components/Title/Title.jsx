import React from "react";
import { StyledTitle } from "./Title.styles";

const Title = ({ children, size }) => {
  return <StyledTitle size={size}>{children}</StyledTitle>;
};

export default Title;
