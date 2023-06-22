import { styled } from "../../theme/styled";

export const StyledCategoryButton = styled("div", {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    shadow:1,
    borderRadius: "16px",
    padding: "8px",
    backgroundColor: "$primary",
    color: "$white",
    margin: "8px",
    cursor: "pointer",
});

export const StyledCategoryIcon = styled("div", {
    fontSize: "28px",
});

export const StyledCategoryProfession = styled("span", {
    textAlign: "center",
    fontSize: "16px",
    lineHeight: "16px",
    fontWeight: 500,
});
