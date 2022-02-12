import React from 'react';
import { createTheme, TextField } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { Search } from '@material-ui/icons';

import classes from './SearchBox.module.css';

const theme = createTheme({
	palette: {
		type: "dark"
	}
});

const inputStyle = {
	letterSpacing: '0.15rem',
	fontFamily: 'Inter, sans-serif',
	fontWeight: 600,
	fontSize: '0.9rem',
	color: 'rgba(242, 242, 242, 0.8)',
	marginLeft: '1rem',
}

export default function SearchBox() {
	return (
		<ThemeProvider theme={theme}>
			<div className={classes.searchBoxContainer}>
				<TextField
					placeholder="ENTER WORDS"
					variant="standard"
					inputProps={{
						style: inputStyle, spellCheck: false
					}}
					InputProps={{
						disableUnderline: true, startAdornment: <Search fontSize="small" />
					}}
					style={{ letterSpacing: '0.15rem' }}
					autoFocus
				/>
			</div>
		</ThemeProvider>
	)
}