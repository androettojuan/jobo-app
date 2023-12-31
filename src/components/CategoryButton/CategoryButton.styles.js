import { styled } from "../../theme/styled";

export const StyledCategoryButton = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  shadow: 1,
  borderRadius: "16px",
  padding: "6px",
  cursor: "pointer",
  width: "120px",
  height: "110px",
  gap: "6px",
  "@media (max-width: 768px)": {
    width: "100px",
    height: "100px",
    padding: "4px",
    borderRadius: "12px",
  },
  variants: {
    color: {
      secondary: {
        backgroundColor: "$secondary",
      },
      tertiary: {
        backgroundColor: "$munsell",
      },
    },
  },
});

export const StyledCategoryIcon = styled("img", {
  width: "42px",
  height: "42px",
});

export const StyledCategoryProfession = styled("span", {
  textAlign: "center",
  fontSize: "16px",
  lineHeight: "16px",
  fontWeight: 500,
  color: "$white",
  "@media (max-width: 768px)": { fontSize: "14px" },
});
