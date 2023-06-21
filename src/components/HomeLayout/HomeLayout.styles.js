import { styled } from "../../theme/styled";

export const StyledHomeLayout = styled("div", {
  padding: "0 16px",
});

export const StyledHomeSearch = styled("div", {
  marginTop: "32px",
});

export const StyledHomeButtons = styled("div", {
  marginTop: "36px",
  display: "flex",
  flexDirection: "row",
});

export const StyledHomeButtonLg = styled("div", {
  marginRight: "8px",
});

export const StyledHomeButtonsSm = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gridTemplateRows: "repeat(2, 1fr)",
  gridColumnGap: "8px",
  gridRowGap: "8px",
});

export const StyledHomeTitle = styled("div", {
  margin: "32px 0",
  fontSize: "20px",
  fontWeight: 700,
  lineHeight: "27px",
});
