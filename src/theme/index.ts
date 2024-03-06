import { createTheme } from "@mui/material";
import typography from "./typography";
import { breakpoints } from "./breakpoints";

declare module "@mui/material/styles" {
    interface BreakpointOverrides {
        xs: true;
        sm: true;
        md: true;
        lg: true;
        xl: true;
    }
}

export const theme = createTheme({
    breakpoints,
    typography,
});


