import { styled } from "../../theme/styled";

export const StyledUploadImage = styled("div", {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
});

export const StyledUploadImageLabel = styled("span", {
  fontSize: "18px",
  fontWeight: "700",
});

export const StyledUploadImageContainerButton = styled("label", {});

export const StyledUploadImageInput = styled("input", {
    display: "none",
});

export const StyledUploadImageButton = styled("div", {
    padding: "16px 24px 16px 16px",
    borderRadius: "24px",
    shadow: 1,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
});

export const StyledUploadImageText = styled("span", {});