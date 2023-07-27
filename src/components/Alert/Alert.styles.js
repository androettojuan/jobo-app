import { styled } from "../../theme/styled";

export const StyledAlert = styled("div", {
  position: "fixed",
  bottom: "0",
  left: "24px",
  right: "24px",
  opacity: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  padding: "16px",
  borderRadius: "12px",
  backgroundColor: "$primary",
  color: "$white",
  boxShadow: "0 0 8px 0 rgba(0, 0, 0, 0.2)",
  visibility: "hidden",
  transition: "none 0.3s ease-in-out",
  transitionProperty: "opacity, visibility, bottom",
  zIndex: 9999,
  variants: {
    visible: {
      true: {
        bottom: "80px",
        opacity: 1,
        visibility: "visible",
      },
    },
  },
});

export const StyledAlertText = styled("span", {
  fontSize: "18px",
  fontWeight: "500",
});
