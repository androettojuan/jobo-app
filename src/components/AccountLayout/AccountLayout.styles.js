import { styled } from "../../theme/styled";

export const StyledAccountLayout = styled("div", {
  display: "flex",
  flexDirection: "column",
  padding: "20px",
  position: "relative",
});

export const StyledAccountName = styled("div", {
  margin: "0 auto",
  marginBottom: "20px",
});

export const StyledAccountDescription = styled("div", {});

export const StyledAccountInfo = styled("div", {
  marginBottom: "36px",
});

export const StyledAccountButton = styled("div", {
  display: "flex",
  justifyContent: "center",
});

export const StyledAccountBottomBar = styled("div", {
  position: "absolute",
  bottom: "0",
  left: "0",
  right: "0",
});

export const StyledAccountComments = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  marginBottom: "20px",
});
