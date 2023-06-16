import { styled } from "../../theme/styled";

export const StyledHeader = styled("div", {
  position: "relative",
  display: "flex",
  padding: 16,
  alignItems: "center",
  justifyContent: "space-between",
});

export const StyledHeaderTitle = styled("h1", {
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "24px",
  lineHeight: "33px",
  flexGrow: 0,
  userSelect: "none",
});

export const StyledHeaderActionButton = styled("button", {
  width: 36,
  height: 36,
  fontSize: 24,
  border: 0,
  padding: 0,
  color: "$dark",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "transparent",
  cursor: "pointer",
});

export const StyledContainerButton = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  cursor: "pointer",
});

export const StyledActionsContainer = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(24px, 1fr))",
  gridColumnGap: "12px",
});

export const StyledText = styled("span", {
  fontSize: "14px",
});

export const StyledLocationContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "row",
  fontSize: "14px",
  color: "$dark",
  cursor: "pointer",
  position: "absolute",
  left: "50%",
  transform: "translateX(calc(-50% + 36px))",
});

export const StyledButtonLoc = styled("button", {
  width: 36,
  height: 36,
  fontSize: 22,
  border: 0,
  padding: 0,
  color: "$dark",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "transparent",
});

export const StyledButtonLocation = styled("button", {
  width: 36,
  height: 36,
  fontSize: 14,
  border: 0,
  padding: 0,
  color: "$dark",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "transparent",
});

export const StyledTextLoc = styled("span", {
  fontSize: "18px",
  fontWeight: 600,
});

export const StyledLogo = styled("img", {
  height: 28,
});

