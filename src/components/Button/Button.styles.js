import { styled } from "../../theme/styled";

export const StyledButton = styled("button", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "none",
  borderRadius: "24px",
  cursor: "pointer",
  variants: {
    size: {
      small: {
        padding: "5px 10px",
        fontSize: "12px",
      },
      medium: {
        padding: "10px 20px",
        fontSize: "16px",
        fontWeight: "500",
      },
      large: {
        padding: "15px 30px",
        fontSize: "16px",
      },
    },
    color: {
      primary: {
        backgroundColor: "$primary",
        color: "$white",
      },
      secondary: {
        backgroundColor: "$secondary",
        color: "$white",
      },
      grey: {
        backgroundColor: "$light",
      },
    },
  },
});
