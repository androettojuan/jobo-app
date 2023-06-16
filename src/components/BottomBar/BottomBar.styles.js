import { styled } from "../../theme/styled";

export const StyledContainer = styled("div", {
  width: "100%",
  height: "72px",
  position: "relative",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  backgroundColor: "white",
  shadow: 1,
  zIndex: 10,
});

export const StyledBottomBarIcon = styled("button", {
  position: "relative",
  display: "flex",
  width: "64px",
  height: "64px",
  justifyContent: "center",
  alignItems: "center",
  border: "none",
  backgroundColor: "transparent",
  outline: "none",
  fontSize: "24px",
  color: "$dark",
  cursor: "pointer",
  padding: "20px",
  transition: "none 0.2s ease-in-out",
  transitionProperty: "color, background-color",
  svg: {
    position: "absolute",
    top: "12px",
  },
  variants: {
    selected: {
      true: {
        color: "$primary",
        "&::after": {
          backgroundColor: "$primary",
        },
      },
      false: {
        color: "$dark",
      },
    },
  },
});

export const StyledLabel = styled("span", {
  position: "absolute",
  whiteSpace: "nowrap",
  fontSize: "14px",
  top: "36px",
});
