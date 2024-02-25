import { ColorModeContext, useMode } from "./theme.js";
import { InformesProvider } from "./context/InformesContext.jsx";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { AuthRoutes } from "./routes/appRoutes.jsx";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <InformesProvider>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <AuthRoutes />
        </ThemeProvider>
      </ColorModeContext.Provider>
    </InformesProvider>
  );
}

export default App;
