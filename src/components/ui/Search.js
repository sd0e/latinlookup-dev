import { createTheme, TextField, ThemeProvider } from "@mui/material";

export default function Search() {
    const theme = createTheme({
        palette: {
            mode: 'dark',
        },
        typography: {
            fontFamily: 'Inter,sans-serif',
        },
        components: {
            MuiTextField: {
                styleOverrides: {
                    root: {
                        width: '100%',
                    },
                },
            },
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <TextField fullWidth label="Enter Words" autoFocus autoCorrect="off" autoComplete="off" />
        </ThemeProvider>
    )
}