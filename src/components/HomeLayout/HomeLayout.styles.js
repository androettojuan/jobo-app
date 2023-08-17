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
  fontSize: "30px",
  color: "$primary",
  cursor: "pointer",
});
export const StyledHomeTitle = styled("div", {
  margin: "32px 0",
  fontSize: "20px",
  fontWeight: 700,
  lineHeight: "27px",
});

export const StyledHomeContent = styled("div", {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  flexWrap: "wrap",
  gap: "12px",
  marginBottom: "12px",
});

