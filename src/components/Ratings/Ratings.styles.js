import { styled } from "../../theme/styled";

export const StyledRatings = styled("div", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "16px",
});

export const StyledRatingIcon = styled("div", {
  color: "$yellow",
  fontWeight: 400,
  fontSize: "20px",
  lineHeight: "16px",
  display: "flex",
  alignItems: "center",
});

export const StyledRatingText = styled("span", {
  fontSize: "18px",
  marginRight: "4px",
  display: "flex",
  alignItems: "center",
});
