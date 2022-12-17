import React from 'react';
import { createTheme, IconButton, ThemeProvider } from '@mui/material';
import { Menu } from '@mui/icons-material';
import { withStyles } from '@mui/styles';

import classes from './Header.module.css';

const theme = createTheme({
	components: {
		MuiIconButton: {
			styleOverrides: {
				root: {
					width: "1.3rem",
					height: "1.3rem",
					lineHeight: "1.3rem",
					verticalAlign: "middle",
					cursor: "pointer",
					color: "rgba(242, 242, 242, 0.8)",
					marginRight: "1.5rem",
				}
			}
		}
	},
	palette: {
		mode: 'dark',
	},
});

export default function Header({ Hamburger, HamburgerClickEvent }) {
	return (
		<ThemeProvider theme={theme}>
			<div className={classes.headerOuter}>
				{ Hamburger && <IconButton className={classes.headerHamburger} onClick={HamburgerClickEvent}><Menu fontSize="small" /></IconButton> }
				<span className={classes.headerTitle}>
					Latin Lookup
					<div className={classes.versionHolder}>
						<span className={classes.versionName}>α</span>
					</div>
				</span>
			</div>
		</ThemeProvider>
	)
}