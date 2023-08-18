import { styled } from "../../theme/styled";
import { FaUserCircle } from "react-icons/fa";

export const StyledHomeLayout = styled("div", {
  padding: "0 16px",
  display: "flex",
  flexDirection: "column",
});

export const StyledHomeHeader = styled("div", {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
});

export const StyledHomeLogo = styled("img", {
  width: "100px",
  height: "40px",
  objectFit: "contain",
  marginTop: "-8px",
});

export const StyledHomeUser = styled(FaUserCircle, {
  fontSize: "32px",
  color: "$primary",
  cursor: "pointer",
});
export const StyledHomeTitle = styled("div", {
  margin: "16px 0 24px 0",
});

export const StyledHomeContent = styled("div", {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  flexWrap: "wrap",
  gap: "12px",
  marginBottom: "12px",
});

