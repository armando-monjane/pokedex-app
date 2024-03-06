import { ThemeProvider } from "@mui/material";
import { theme } from "@theme/index";
import { RouterMiddleware } from "./router";
import { ReduxProvider } from "@redux/provider";

function App() {

  return (
    <ReduxProvider>
      <ThemeProvider theme={theme}>
        <RouterMiddleware />
      </ThemeProvider>
    </ReduxProvider>
  )
}

export default App
