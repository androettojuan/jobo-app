import { styled } from "../../theme/styled";

export const StyledTitle = styled("h1", {
  color: "$dark",
  margin: "0",
  padding: "0",
  variants: {
    size: {
      sm: {
        fontSize: "16px",
        fontWeight: "700",
        lineHeight: "20px",
      },
      md: { fontSize: "18px", fontWeight: "700", lineHeight: "24px" },
      lg: {
        fontSize: "20px",
        fontWeight: "700",
        lineHeight: "28px",
      },
    },
  },
});
