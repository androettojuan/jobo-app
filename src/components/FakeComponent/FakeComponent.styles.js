import { keyframes, styled } from "../../theme/styled";

const bgColor = keyframes({
  "0%": { background: "$light" },
  "50%": { background: "$gray" },
  "100%": { background: "$light" },
});

export const StyledFakeComponent = styled("div", {
  animationName: bgColor,
  animationDuration: "3s",
  animationIterationCount: "infinite",
  animationTimingFunction: "linear",
  borderRadius: "8px",
  opacity: 0.5,
  display: "inline-block",
});
