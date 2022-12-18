import React from 'react';
import { Button, createTheme, ThemeProvider } from '@mui/material';
import { Search } from '@mui/icons-material';

import classes from './SearchBox.module.css';
import GetColorMode from '../../scripts/GetColorMode';

const theme = createTheme({
	palette: {
		type: GetColorMode(document)
	},
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					justifyContent: "left",
				},
			},
		},
	},
});

export default function SearchBox({ setSearchBoxOpen, onClick }) {
	return (
		<ThemeProvider theme={theme}>
			<Button fullWidth onClick={() => {
				onClick();
				setSearchBoxOpen(true);
			}}>
				<div className={classes.searchBoxContainer}>
					<Search className={classes.searchIcon} />
					<span className={classes.searchBoxText}>Search</span>
				</div>
			</Button>
		</ThemeProvider>
	)
}