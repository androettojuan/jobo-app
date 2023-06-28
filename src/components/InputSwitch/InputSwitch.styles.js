import { styled } from "../../theme/styled";

export const StyledInputSwitch = styled("div", {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  cursor: "pointer",
});

export const StyledInputSwitchLabel = styled("span", {
  fontSize: "20px",
  fontWeight: "500",
  color: "$dark",
});

export const StyledSwitch = styled("div", {
  display: "flex",
  backgroundColor: "$light",
  padding: "4px",
  borderRadius: "20px",
  width: "48px",
  shadow: 1,
});

export const StyledSwitchBall = styled("div", {
  display: "flex",
  width: "14px",
  height: "14px",
  borderRadius: "50%",
  transform: "translateX(0)",
  transition: "none 0.2s ease-in-out",
  transitionProperty: "transform, background-color",
  variants: {
    active: {
      true: {
        backgroundColor: "$primary",
        transform: "translateX(200%)",
      },
      false: {
        backgroundColor: "$grey",
      },
    },
  },
});
