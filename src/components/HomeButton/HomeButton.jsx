import React from "react";
import {
  StyledHomeButton,
  StyledHomeButtonIcon,
  StyledHomeButtonText,
} from "./HomeButton.styles";

const HomeButton = ({ onClick, size, color, text, icon }) => {
  return (
    <StyledHomeButton onClick={onClick} size={size} color={color}>
      <StyledHomeButtonText>{text}</StyledHomeButtonText>
      <StyledHomeButtonIcon size={size} src={icon} alt="icon-profesion" />
    </StyledHomeButton>
  );
};

export default HomeButton;
