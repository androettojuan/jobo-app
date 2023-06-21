import {
  StyledAppContent,
  StyledBottomBarContainer,
  StyledFullApp,
} from "./AppLayout.styles";

const AppLayout = StyledFullApp;

AppLayout.AppContainer = StyledAppContent;
AppLayout.NavContainer = StyledBottomBarContainer;

export default AppLayout;
