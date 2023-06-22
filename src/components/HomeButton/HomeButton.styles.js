import { styled } from "../../theme/styled";

export const StyledHomeButton = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  color: "$white",
  cursor: "pointer",
  variants: {
    size: {
      sm: {
        width: "100px",
        height: "80px",
        borderRadius: "16px",
        padding: "4px 4px",
      },
      lg: {
        padding: "16px 8px",
        borderRadius: "24px",
        width: "112px",
        height: "172px",
      },
    },
    color: {
      primary: {
        backgroundColor: "$primary",
      },
      secondary: {
        backgroundColor: "$secondary",
      },
      tiffany: {
        backgroundColor: "$tiffany",
      },
      prussian: {
        backgroundColor: "$prussian",
      },
      munsell: {
        backgroundColor: "$munsell",
      },
    },
  },
});

export const StyledHomeButtonIcon = styled("img", {
  variants: {
    size: {
      sm: {},
      lg: { marginTop: "8px" },
    },
  },
});

export const StyledHomeButtonText = styled("span", {
  margin: "8px 0",
  textAlign: "center",
  fontSize: "14px",
});
