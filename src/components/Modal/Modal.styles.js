import { AiOutlineClose } from "react-icons/ai";
import { styled } from "../../theme/styled";

export const StyledModal = styled("div", {
  position: "relative",
  width: "100%",
  height: "100%",
  display: "none",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  variants: {
    show: {
      true: { display: "flex" },
    },
  },
});

export const StyledModalFondo = styled("div", {
  position: "fixed",
  top: "0",
  left: "0",
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0,0,0,0.5)",
  zIndex: "100",
  display: "flex",
});

export const StyledModalContent = styled("div", {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "$white",
  borderRadius: "5px",
  padding: "20px",
  zIndex: "101",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  width: "300px",
});

export const StyledModalHeader = styled("div", {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "20px",
  width: "100%",
  paddingBottom: "16px",
  borderBottom: "1px solid $light",
});

export const StyledModalTitle = styled("span", {
  fontSize: "20px",
  fontWeight: "500",
  color: "$dark",
  whiteSpace: "nowrap",
});

export const StyledModalClose = styled(AiOutlineClose, {
  fontSize: "20px",
  color: "$dark",
  cursor: "pointer",
});

export const StyledModalBody = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  paddingBottom: "16px",
  borderBottom: "1px solid $light",
});

export const StyledModalRating = styled("div", {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  paddingBottom: "16px",
});

export const StyledModalInput = styled("textarea", {
  width: "240px",
  maxWidth: "240px",
  minWidth: "180px",
  height: "160px",
  maxHeight: "400px",
  minHeight: "160px",
  border: "1px solid $light",
  borderRadius: "12px",
  padding: "10px",
});

export const StyledModalFooter = styled("div", {
  marginTop: "20px",
});
