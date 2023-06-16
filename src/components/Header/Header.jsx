import React from "react";
import {
  StyledActionsContainer,
  StyledHeader,
  StyledHeaderActionButton,
  StyledHeaderTitle,
  StyledText,
  StyledContainerButton,
} from "./Header.styles";

const Header = ({
  title,
  actions,
}) => (
  <StyledHeader>
    <StyledHeaderTitle>{title}</StyledHeaderTitle>
    <StyledActionsContainer>
      {actions
        ?.filter((e) => e.visible)
        .map((action) => (
          <StyledContainerButton key={action.name} onClick={action.onClick}>
            <StyledHeaderActionButton>
              <action.icon />
            </StyledHeaderActionButton>
            {action.text && <StyledText>{action.text}</StyledText>}
          </StyledContainerButton>
        ))}
    </StyledActionsContainer>
  </StyledHeader>
);

export default Header;
