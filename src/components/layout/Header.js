import React from 'react';
import { createTheme, IconButton, ThemeProvider } from '@mui/material';
import { Menu, SearchOutlined } from '@mui/icons-material';

import classes from './Header.module.css';

const theme = createTheme({
	components: {
		MuiIconButton: {
			styleOverrides: {
				root: {
					width: "2rem",
					height: "2rem",
					lineHeight: "1.3rem",
					verticalAlign: "middle",
					cursor: "pointer",
					color: "rgba(242, 242, 242, 0.8)",
				}
			}
		}
	},
	palette: {
		mode: 'dark',
	},
});

export default function Header({ Hamburger, HamburgerClickEvent, setSearchBoxOpen }) {
	return (
		<ThemeProvider theme={theme}>
			<div className={classes.headerOuter}>
				<div className={classes.headerContentFlex}>
					{ Hamburger && <IconButton className={classes.headerHamburger} onClick={HamburgerClickEvent}><Menu fontSize="small" /></IconButton> }
					<span className={classes.headerTitle} style={{ marginLeft: Hamburger ? '1.5rem' : '0rem' }}>
						Latin Lookup
						<div className={classes.versionHolder}>
							<span className={classes.versionName}>α</span>
						</div>
					</span>
				</div>
				<div className={classes.headerContentFlex}>
					<IconButton className={classes.headerHamburger} onClick={() => setSearchBoxOpen(true)}><SearchOutlined fontSize="small" /></IconButton>
				</div>
			</div>
		</ThemeProvider>
	)
}