import { createTheme } from "@mui/material";
import { green, orange } from "@mui/material/colors";

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
      success: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
      success?: string;
    };
  }
}

export const theme = createTheme({
  status: {
    danger: orange[500],
    success: green[500],
  },
});
