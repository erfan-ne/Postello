import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: { fontFamily: `'Vazirmatn', Roboto, Arial` },
  direction: "rtl",
  palette: {
    primary: { main: "#40BAD5", light: "#c3e7f0ff", dark: "#0094b6ff" },
    secondary: { main: "#FC6E51", light: "#ffac9cff", dark: "#d3462aff" },
    background: { default: "#F5F5F5", paper: "#FFFFFF" },
    text: { primary: "#5D4037", secondary: "#e9ac99ff", dark: "#46261cff" },
    success: { main: "#4CAF50", light: "#81C784", dark: "#388E3C" },
    error: { main: "#F44336", light: "#E57373", dark: "#D32F2F" },
    warning: { main: "#FF9800", light: "#FFB74D", dark: "#F57C00" },
    info: { main: "#2196F3", light: "#64B5F6", dark: "#1976D2" },
  },
});

export default theme;
