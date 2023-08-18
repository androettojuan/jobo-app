import { styled } from "../../theme/styled";

export const StyledCommentsLayout = styled("div", {
  display: "flex",
  flexDirection: "column",
  padding: "20px",
});

export const StyledCommentsTitle = styled("div", {
  marginBottom: "24px",
  fontSize: "20px",
});

export const StyledComments = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "12px",
});

export const StyledCommentsNoResults = styled("div", {
  marginTop: "60px",
});
