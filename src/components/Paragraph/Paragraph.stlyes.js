import { styled } from "../../theme/styled";

export const StyledParagraph = styled("p", {
  fontWeight: 400,
  lineHeight: "19px",
  marginBottom: 8,
  variants: {
    size: {
      sm: {
        fontSize: 14,
      },
      md: {
        fontSize: 16,
      },
    },
  },
});
