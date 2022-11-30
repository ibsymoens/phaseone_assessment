import { createTheme } from "@mui/material";

export const theme = createTheme({
    breakpoints: {
        values: {
            mobile: 0,
            tablet: 700,
            laptop: 900,
            desktop: 1200,
            largesreen: 1536
        }
    }
});