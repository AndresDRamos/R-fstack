import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

// color design tokens
export const tokens = (mode) => ({
  grey: {
    100: "#d7d8d7",
    200: "#afb0af",
    300: "#878986",
    400: "#5f615e",
    500: "#373a36",
    600: "#2c2e2b",
    700: "#212320",
    800: "#161716",
    900: "#0b0c0b",
  },
  orange: {
    100: "#ffded7",
    200: "#ffbeae",
    300: "#ff9d86",
    400: "#ff7d5d",
    500: "#ff5c35",
    600: "#cc4a2a",
    700: "#993720",
    800: "#662515",
    900: "#33120b",
  },
  greytwo: {
    100: "#f4f4f4",
    200: "#e9e9e9",
    300: "#dddedd",
    400: "#d2d3d2",
    500: "#c7c8c7",
    600: "#9fa09f",
    700: "#777877",
    800: "#505050",
    900: "#282828",
  },
  white: {
    100: "#ffffff",
    200: "#ffffff",
    300: "#ffffff",
    400: "#ffffff",
    500: "#ffffff",
    600: "#cccccc",
    700: "#999999",
    800: "#666666",
    900: "#333333",
  },
  sOne: {
    100: "#e9e9e7",
    200: "#d3d3cf",
    300: "#bcbeb8",
    400: "#a6a8a0",
    500: "#909288",
    600: "#73756d",
    700: "#565852",
    800: "#3a3a36",
    900: "#1d1d1b",
  },
  sTwo: {
    100: "#f7f7f7",
    200: "#f0efef",
    300: "#e8e8e6",
    400: "#e1e0de",
    500: "#d9d8d6",
    600: "#aeadab",
    700: "#828280",
    800: "#575656",
    900: "#2b2b2b",
  },
  sThree: {
    100: "#ffdad7",
    200: "#ffb4af",
    300: "#ff8f88",
    400: "#ff6960",
    500: "#ff4438",
    600: "#cc362d",
    700: "#992922",
    800: "#661b16",
    900: "#330e0b",
  },
  sFour: {
    100: "#fdf6f7",
    200: "#fbedef",
    300: "#f8e5e6",
    400: "#f6dcde",
    500: "#f4d3d6",
    600: "#c3a9ab",
    700: "#927f80",
    800: "#625456",
    900: "#312a2b",
  },
  sFive: {
    100: "#faf9fa",
    200: "#f5f3f5",
    300: "#efedf0",
    400: "#eae7eb",
    500: "#e5e1e6",
    600: "#b7b4b8",
    700: "#89878a",
    800: "#5c5a5c",
    900: "#2e2d2e",
  },
});

// mui theme settings
export const themeSettings = (mode) => {
  const colors = tokens(mode);

  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            primary: {
              main: colors.grey[500],
            },
            secondary: {
              main: colors.orange[500],
            },
            neutral: {
              dark: colors.greytwo[700],
              main: colors.greytwo[400],
              light: colors.greytwo[100],
            },
            background: {
              default: colors.grey[500],
            },
          }
        : {
            primary: {
              main: colors.grey[100],
            },
            secondary: {
              main: colors.orange[500],
            },
            neutral: {
              dark: colors.greytwo[600],
              main: colors.greytwo[500],
              light: colors.greytwo[100],
            },
            background: {
              default: colors.white[500],
            },
          }),
    },
    typography: {
      fontFamily: ["Montserrat"].join(","),
      fontSize: 12,
      h1: {
        fontfamily: ["Montserrat"].join(","),
        fontSize: 40,
      },
      h2: {
        fontfamily: ["Montserrat"].join(","),
        fontSize: 32,
      },
      h3: {
        fontfamily: ["Montserrat"].join(","),
        fontSize: 24,
      },
      h4: {
        fontfamily: ["Montserrat"].join(","),
        fontSize: 20,
      },
      h5: {
        fontfamily: ["Montserrat"].join(","),
        fontSize: 16,
      },
      h6: {
        fontfamily: ["Montserrat"].join(","),
        fontSize: 14,
      },
    },
  };
};

// context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return [theme, colorMode];
};
