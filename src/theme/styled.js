import { createStitches } from "@stitches/react";
import Color from "color";

const resolveColor = (color) => {
  if (color.startsWith("$")) {
    return resolveColor(config.theme.colors[color.replace("$", "")]);
  }
  return color;
};

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      red: "#f63737",
      green: "#91C301",
      blue: "#4B0BB4",
      yellow: "#FF912C",
      white: "#ffffff",
      primary: "#09BC8A",
      dark: "#333333",
      grey: "#a1a1a1",
      secondary: "#004346",
      light: "#e9e9e9",
      lighter: "#fafafa",
      tiffany: "#75DDDD",
      munsell: "#508991",
      prussian: "#172A3A",
      success: "$green",
      warning: "$yellow",

      background: "$lighter",
      foreground: "$dark",
      backdrop: "$dark",
      card: "$white",
      disabled: "#666",
      active: "$primary",
    },
  },
  utils: {
    gradient: (value) => {
      const color = resolveColor(value);
      const brigthColor = Color(color).alpha(0.8).string();
      return {
        background: `linear-gradient(0deg, ${color} 0%, ${brigthColor} 100%)`,
      };
    },
    marginX: (value) => ({ marginLeft: value, marginRight: value }),
    marginY: (value) => ({ marginTop: value, marginBottom: value }),
    paddingX: (value) => ({ paddingLeft: value, paddingRight: value }),
    paddingY: (value) => ({ paddingTop: value, paddingBottom: value }),
    shadow: (value) => {
      if (value === 1) {
        return { boxShadow: "0 1px 20px rgba(0, 0, 0, 0.1)" };
      } else if (value === 2) {
        return { boxShadow: "0 1px 53px rgba(0, 0, 0, 0.15)" };
      } else if (value === 3) {
        return { boxShadow: "0 0 100px rgba(0, 0, 0, 0.5)" };
      } else if (value === 4) {
        return { boxShadow: "0 8px 20px rgb(86, 86, 86, 0.5)" };
      }
    },
  },
});
