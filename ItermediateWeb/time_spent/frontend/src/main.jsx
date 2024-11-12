import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from "react-router-dom";
import {CssBaseline, ThemeProvider} from "@mui/material";
import {darkTheme} from "../components/ui/Theme.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
          <ThemeProvider theme={darkTheme}>
              <CssBaseline/>
              <App />
          </ThemeProvider>
      </BrowserRouter>
  </StrictMode>,
)
