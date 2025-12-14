import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: { fontFamily: `'Vazirmatn', Roboto, Arial` },
  direction: "rtl",
  palette: {
    primary: { main: "#1A423A", light: "#00695c", dark: "#122e28" },
    secondary: { main: "#D4AF37", light: "#f5d876", dark: "#b68b00ff" },
    background: { default: "#EFE6D5", paper: "#e6f7f7" },
    text: { primary: "#FFFFFF", secondary: "#D9B55A", dark: "#cfcfd1", contrastText: "#0A3D3F" },
    success: { main: "#4CAF50", light: "#81C784", dark: "#388E3C" },
    error: { main: "#F44336", light: "#E57373", dark: "#D32F2F" },
    warning: { main: "#FF9800", light: "#FFB74D", dark: "#F57C00" },
    info: { main: "#2196F3", light: "#64B5F6", dark: "#1976D2" },
  },
});

export default theme;
