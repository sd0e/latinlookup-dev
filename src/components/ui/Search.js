import { Button, createTheme, TextField, ThemeProvider } from "@mui/material";
import { useState } from "react";

export default function Search({ submit }) {
    const [searchBoxContent, setSearchBoxContent] = useState('');

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
            <TextField fullWidth label="Enter Words" autoFocus autoCorrect="off" autoComplete="off" onChange={e => setSearchBoxContent(e.target.value)} value={searchBoxContent} />
            <Button onClick={() => submit(searchBoxContent)}>Enter</Button>
        </ThemeProvider>
    )
}