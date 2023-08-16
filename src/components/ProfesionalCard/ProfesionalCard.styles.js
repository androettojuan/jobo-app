import { styled } from "../../theme/styled";

export const StyledProfesionalCard = styled("div", {
  display: "flex",
  flexDirection: "row",
  shadow: 1,
  borderRadius: "16px",
  cursor: "pointer",
  height: "90px",
});

export const StyledPhoto = styled("img", {
  borderTopLeftRadius: "16px",
  borderBottomLeftRadius: "16px",
  objectFit: "cover",
  width: "90px",
});

export const StyledInfoAndFavorites = styled("div", {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  width: "100%",
  padding: "8px 16px",
});

export const StyledInfoContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
});

export const StyledName = styled("span", {
  fontWeight: 600,
  fontSize: "16px",
  lineHeight: "19px",
  marginBottom: "8px",
});

export const StyledProfession = styled("span", {
  fontWeight: 400,
  fontSize: "16px",
  lineHeight: "16px",
});

export const StyledFavoritesAndRating = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  justifyContent: "space-between",
});

export const StyledFavorites = styled("div", {
  color: "$red",
  fontSize: "24px",
});

export const StyledRatingContainer = styled("div", {
  display: "flex",
  flexDirection: "row",
});

export const StyledRating = styled("span", {
  fontWeight: 400,
  fontSize: "16px",
  lineHeight: "16px",
});

export const StyledRatingIcon = styled("div", {
  color: "$yellow",
  fontSize: "18px",
  marginRight: "4px",
});
