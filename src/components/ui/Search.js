import { SearchOutlined } from "@mui/icons-material";
import { Button, createTheme, Stack, TextField, ThemeProvider } from "@mui/material";
import { useState } from "react";
import GetColorMode from "../../scripts/GetColorMode";

import classes from './Search.module.css';

export default function Search({ submit, setSearchBoxOpen, refresh }) {
    const [searchBoxContent, setSearchBoxContent] = useState('');

    const theme = createTheme({
        palette: {
            mode: GetColorMode(document),
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

    const anyKeyPressed = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            submit(searchBoxContent);
        } else if (e.key === 'Escape') {
            e.preventDefault();
            setSearchBoxOpen(false);
        }
    }

    return (
        <ThemeProvider theme={theme}>
            <div onKeyDown={anyKeyPressed}>
                <span className={classes.searchTitle}>
                    <span className={classes.searchTitleInner}>
                        <SearchOutlined fontSize="small" className={classes.searchIcon} />
                        Search
                    </span>
                </span>
                <TextField fullWidth label="Enter Words" aria-label="Enter Words"  autoFocus autoCorrect="off" autoComplete="off" autoCapitalize="off" onChange={e => setSearchBoxContent(e.target.value)} value={searchBoxContent} />
                <div className={classes.buttonContainer}>
                    <Stack direction="row" spacing={2}>
                        <Button onClick={() => submit(searchBoxContent)} variant="outlined" key={`lookup-${refresh}`} aria-label="Search for word">Lookup</Button>
                        <Button onClick={() => setSearchBoxOpen(false)} variant="outlined" color="warning" key={`exit-${refresh}`} aria-label="Close search box">Cancel</Button>
                    </Stack>
                </div>
            </div>
        </ThemeProvider>
    )
}