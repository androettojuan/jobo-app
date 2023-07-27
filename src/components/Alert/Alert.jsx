import React from "react";
import { StyledAlert, StyledAlertText } from "./Alert.styles";

const Alert = ({ text, visible }) => {
  return (
    <StyledAlert visible={visible}>
      <StyledAlertText>{text}</StyledAlertText>
    </StyledAlert>
  );
};

export default Alert;
