import { keyframes, styled } from "../../theme/styled";
import { FiSearch } from "react-icons/fi";
import { AiOutlineLoading3Quarters as LoadIcon } from "react-icons/ai";

const giro = keyframes({
  "0%": { transform: "rotate(0deg)" },
  "100%": { transform: "rotate(360deg)" },
});

const iconStyles = {
  position: "absolute",
  top: 14,
  right: 14,
  zIndex: 10,
  width: 20,
  height: 20,
  color: "$dark",
  pointerEvents: "none",
};

export const StyledSearchIcon = styled(FiSearch, iconStyles);

export const StyledLoadingIcon = styled(LoadIcon, {
  ...iconStyles,
  animationName: giro,
  animationDuration: "1s",
  animationIterationCount: "infinite",
  animationTimingFunction: "linear",
});

export const StyledAccountName = styled("input", {
  border: "none",
  borderRadius: "10em",
  padding: "14px 14px 12px 14px",
  fontWeight: 400,
  fontSize: 16,
  lineHeight: "22px",
  color: "$dark",
  shadow: 1,
  outline: "none",
  display: "flex",
  flexDirection: "column",
  width: "100%",
  zIndex: 1,
  flex: 1,
  "&::placeholder": {
    color: "$gray",
  },
});

export const StyledInputContainer = styled("div", {
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const StyledLabel = styled("label", {
  fontWeight: 700,
  fontSize: 16,
  lineHeight: "19px",
  paddingBottom: "6px",
  width: "100%",
  position: "relative",
});
