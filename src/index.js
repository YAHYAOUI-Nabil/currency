import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from "@mui/material";

const theme = createTheme();

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
        <ThemeProvider theme={theme}>
                <CssBaseline/>
                <App/>
        </ThemeProvider>
)