import { styled } from "../../theme/styled";

export const StyledComments = styled("div", {
  display: "flex",
  shadow: 1,
  padding: "12px 12px 28px 12px",
  borderRadius: "12px",
  position: "relative",
});

export const StyledCommentsUser = styled("div", {
  display: "flex",
  flexDirection: "row",
});

export const StyledCommentsUserPhoto = styled("img", {
  width: "50px",
  height: "50px",
  objectFit: "cover",
});

export const StyledCommentsContainerText = styled("div", {
  display: "flex",
  flexDirection: "column",
  marginLeft: "12px",
});

export const StyledCommentsUserName = styled("span", {
  fontSize: "16px",
  fontWeight: "600",
  marginBottom: "8px",
});

export const StyledCommentsUserText = styled("p", {
  fontSize: "14px",
  fontWeight: "400",
  width: "220px",
  overflow: "hidden",
  textOverflow: "ellipsis",
});

export const StyledCommentsUserRating = styled("div", {
  position: "absolute",
  top: "8px",
  right: "8px",
});

export const StyledCommentsButton = styled("button", {
  border: "none",
  background: "none",
  cursor: "pointer",
  color: "$primary",
  position: "absolute",
  bottom: "4px",
  right: "8px",
  fontSize: "14px",
});

export const StyledCommentsAdmin = styled("div", {});
