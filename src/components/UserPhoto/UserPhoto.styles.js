import { styled } from "../../theme/styled";

export const StyledUserPhotoContainer = styled("div", {
  height: 144,
  width: 144,
  borderRadius: "50%",
  border: "4px solid $primary",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "0 auto 12px auto",
});

export const StyledUserPhoto = styled("img", {
  height: 128,
  width: 128,
  borderRadius: "50%",
  objectFit: "cover",
});
