import { createStitches, keyframes } from "@stitches/react";

export const { styled } = createStitches({
  theme: {
    colors: {
      background: "#ffffff",
      text: "#333333",
      primary: "#0f8f8f",
      secondary: "#6c757d",
      success: "#28a745",
      danger: "#dc3545",
      warning: "#ffc107",
      info: "#17a2b8",
      shadow: "rgba(0, 0, 0, 0.2)",
    },
    space: {
      1: "5px",
      2: "10px",
      3: "15px",
    },
    fontSizes: {
      1: "12px",
      2: "15px",
      3: "17px",
    },
    fonts: {
      untitled: "Untitled Sans, apple-system, sans-serif",
      mono: "Söhne Mono, menlo, monospace",
    },
    fontWeights: {
      1: "200",
      2: "500",
      3: "700",
    },
    lineHeights: {},
    letterSpacings: {},
    sizes: {},
    borderWidths: {
      0: "0",
      1: "1px",
      2: "2px",
    },
    borderStyles: {},
    radii: {
      1: "3px",
      2: "7px",
      3: "999px",
      4: "50%",
    },
    shadows: {
      0: "0 0 0 transparent", // Transparent shadow (no shadow)
      1: "0 1px 2px rgba(0, 0, 0, 0.1)", // Very subtle shadow
      2: "0 2px 4px rgba(0, 0, 0, 0.1)", // Subtle shadow
      3: "0 3px 6px rgba(0, 0, 0, 0.1)", // Slightly more pronounced shadow
    },
    zIndices: {},
    transitions: {},
  },
});

const { createTheme } = createStitches({});

export const darkTheme = createTheme("dark-theme", {
  colors: {
    background: "#333333",
    text: "#ffffff",
    primary: "#0f8f8f",
    secondary: "#6c757d",
    success: "#28a745",
    danger: "#dc3545",
    warning: "#ffc107",
    info: "#17a2b8",
    shadow: "rgba(0, 0, 0, 0.2)",
  },
  space: {
    1: "5px",
    2: "10px",
    3: "15px",
  },
  fontSizes: {
    1: "12px",
    2: "15px",
    3: "17px",
  },
  fonts: {
    untitled: "Untitled Sans, apple-system, sans-serif",
    mono: "Söhne Mono, menlo, monospace",
  },
  fontWeights: {
    1: "200",
    2: "500",
    3: "700",
  },
  lineHeights: {},
  letterSpacings: {},
  sizes: {},
  borderWidths: {
    0: "0",
    1: "1px",
    2: "2px",
  },
  borderStyles: {},
  radii: {
    1: "3px",
    2: "7px",
    3: "999px",
    4: "50%",
  },
  shadows: {
    0: "0 0 0 transparent", // Transparent shadow (no shadow)
    1: "0 1px 2px rgba(0, 0, 0, 0.1)", // Very subtle shadow
    2: "0 2px 4px rgba(0, 0, 0, 0.1)", // Subtle shadow
    3: "0 3px 6px rgba(0, 0, 0, 0.1)", // Slightly more pronounced shadow
  },
  zIndices: {},
  transitions: {},
});

export const targetTheme = (theme: string | undefined) => {
  switch (theme) {
    case "dark":
      return darkTheme;
    default:
      return "";
  }
};

export const scaleUp = keyframes({
  "0%": { opacity: "0.3" },
  "100%": { opacity: "1" },
});
