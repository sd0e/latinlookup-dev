import React from 'react';
import { Button, createTheme, ThemeProvider } from '@mui/material';
import { Search } from '@mui/icons-material';

import classes from './SearchBox.module.css';

const theme = createTheme({
	palette: {
		type: "dark"
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
					<Search style={{ color: 'rgba(242, 242, 242, 0.8)' }} />
					<span className={classes.searchBoxText}>Search</span>
				</div>
			</Button>
		</ThemeProvider>
	)
}