import { TypographyOptions } from "@mui/material/styles/createTypography";
import { Palette } from "@mui/material/styles/createPalette";
import fontFamily from "./font";

const typography: TypographyOptions | ((palette: Palette) => TypographyOptions) | undefined = {
    fontFamily,
    fontSize: 16,
    h1: {
        fontSize: "2rem",
        lineHeight: 1.3,
        textTransform: "uppercase",
        fontWeight: 400,
    },
    h2: {
        fontFamily: "Jaeger Daily News Regular",
        fontSize: "1.75rem",
        lineHeight: 1.3,
        fontWeight: 400,
    },
    h3: {
        fontSize: "1.5rem",
        lineHeight: 1.3,
        fontFamily: "Jaeger Daily News Regular",
        fontWeight: 400,
    },
    h4: {
        fontSize: "1.25rem",
        lineHeight: 1.3,
    },
    h5: {
        fontSize: "1rem",
        lineHeight: 1.3,
        fontWeight: 700,
        '@media screen and (min-width: 768px)': {
            fontSize: "1.5rem",
        },
    },
    h6: {
        fontSize: "0.825rem",
        lineHeight: 1.5,
        fontWeight: 600,
        '@media screen and (min-width: 1200px)': {
            fontSize: "1.375rem",
        },
    },
}

export default typography;