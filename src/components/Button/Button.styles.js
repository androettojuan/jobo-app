import { styled } from "../../theme/styled";

export const StyledButton = styled("button", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "none",
  borderRadius: "24px",
  variants: {
    size: {
      small: {
        padding: "5px 10px",
        fontSize: "12px",
      },
      medium: {
        padding: "10px 20px",
        fontSize: "14px",
      },
      large: {
        padding: "15px 30px",
        fontSize: "16px",
      },
    },
    color: {
      primary: {
        backgroundColor: "$primary",
      },
      secondary: {
        backgroundColor: "$secondary",
      },
      grey: {
        backgroundColor: "$light",
      },
    },
  },
});
