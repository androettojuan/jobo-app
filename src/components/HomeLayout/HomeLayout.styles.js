import { styled } from "../../theme/styled";

export const StyledHomeLayout = styled("div", {
  padding: "0 16px",
  display: "flex",
  flexDirection: "column",
});

export const StyledHomeSearch = styled("div", {});

export const StyledHomeButtons = styled("div", {
  marginTop: "36px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
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

export const StyledHomeFavorites = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "10px",
});
