"use client";

import { createTheme } from "@mui/material";
import { green, orange, yellow } from "@mui/material/colors";

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
      warning: string;
      success: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
      warning?: string;
      success?: string;
    };
  }
}

export const theme = createTheme({
  status: {
    danger: orange[500],
    warning: yellow[600],
    success: green[600],
  },
  typography: {
    fontFamily: "var(--font-roboto)",
  },
  cssVariables: true,
});
