import { styled } from "../../theme/styled";
import { FiChevronRight } from "react-icons/fi";

export const StyledBreakcrumb = styled("div", {
  display: "flex",
  alignItems: "center",
  padding: "16px 0",
  userSelect: "none",
});

export const StyledTextBreakcrumb = styled("p", {
  fontSize: 20,
  lineHeight: "27px",
  maxWidth: "200px",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  variants: {
    ultimo: {
      true: {
        fontWeight: "400",
      },
      false: {
        fontWeight: "600",
      },
    },
  },
});

export const StyledIcon = styled(FiChevronRight, {
  width: 24,
  height: 24,
});
