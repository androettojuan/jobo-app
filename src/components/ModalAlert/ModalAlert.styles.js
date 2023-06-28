import { AiOutlineClose } from "react-icons/ai";
import { styled } from "../../theme/styled";

export const StyledModalAlert = styled("div", {
  position: "relative",
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

export const StyledModalAlertFondo = styled("div", {
  position: "fixed",
  top: "0",
  left: "0",
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0,0,0,0.5)",
  zIndex: "100",
  display: "none",
  variants: {
    active: {
      false: {
        display: "flex",
      },
    },
  },
});

export const StyledModalAlertContent = styled("div", {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "$white",
  borderRadius: "5px",
  padding: "20px",
  zIndex: "101",
  display: "none",
  width:"300px",
  variants: {
    active: {
      false: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      },
    },
  },
});

export const StyledModalAlertHeader = styled("div", {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "20px",
  width: "100%",
  paddingBottom: "16px",
  borderBottom: "1px solid $light",
});

export const StyledModalAlertTitle = styled("span", {
  fontSize: "20px",
  fontWeight: "500",
  color: "$dark",
  whiteSpace: "nowrap",
});

export const StyledModalAlertClose = styled(AiOutlineClose, {
  fontSize: "20px",
  color: "$dark",
  cursor: "pointer",
});

export const StyledModalAlertBody = styled("div", {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
});

export const StyledModalText = styled("p", {
    textAlign: "center",
    marginBottom: "20px",
});
