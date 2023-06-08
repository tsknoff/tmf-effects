import { createTheme } from "@mui/material";

import { typography } from "./typography";
import { palette } from "./palette";
import { shadows } from "./shadows";

export const LayoutTheme = createTheme({
  zIndex: {
    modal: 6000,
  },
  typography,
  palette,
  shadows,
  spacing: 4,
  shape: {
    borderRadius: 3,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          height: "100%",
        },
        body: {
          height: "100%",
          "*::-webkit-scrollbar-track": {
            display: "none",
            borderColor: "transparent",
            backgroundColor: "transparent",
          },
          "*::-webkit-scrollbar *": {
            background: "transparent",
          },
          "*::-webkit-scrollbar": {
            width: "8px",
            height: "8px",
          },
          "*::-webkit-scrollbar-corner": {
            backgroundColor: "transparent",
          },
          "*::-webkit-scrollbar-thumb": {
            borderRadius: "10px",
            backgroundColor: palette.grey.A700,
            "*-webkit-box-shadow": "inset 0 0 0",
          },
        },

        ".root": {
          height: "100%",
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: palette.grey[400],
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& $notchedOutline": {
            borderColor: palette.grey[300],
          },
          "&:hover $notchedOutline": {
            borderColor: palette.grey[300],
          },
          "&$focused $notchedOutline": {
            borderColor: palette.grey[300],
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        text: {
          textTransform: "initial",
          fontSize: 15,
          fontWeight: "normal",
        },
      },
    },
    MuiToggleButtonGroup: {
      styleOverrides: {
        root: {
          borderRadius: "5px",
        },
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          borderRadius: "5px",
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          marginLeft: -9,
        },
      },
    },
  },
});
