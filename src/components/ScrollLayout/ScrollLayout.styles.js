import { styled } from "../../theme/styled";

export const FullPage = styled("div", {
  display: "flex",
  flexDirection: "column",
  height: "100%",
});

export const FixedPart = styled("div", {
  flex: "0 0 auto",
});

export const ScrollPart = styled("div", {
  overflowX: "hidden",
  overflowY: "auto",
  paddingTop: 20,
  height: "100%",
  variants: {
    noSpace: {
      true: { paddingTop: 0 },
    },
  },
});
