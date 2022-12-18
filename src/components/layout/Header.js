import React from 'react';
import { createTheme, IconButton, ThemeProvider } from '@mui/material';
import { DarkModeOutlined, LightModeOutlined, Menu, SearchOutlined } from '@mui/icons-material';

import classes from './Header.module.css';
import SwitchColorTheme from '../../scripts/SwitchColorTheme';
import GetColorMode from '../../scripts/GetColorMode';

export default function Header({ Hamburger, HamburgerClickEvent, setSearchBoxOpen, setRefresh, refresh }) {
	const ThemeChangeIcon = GetColorMode(document) === 'dark' ? LightModeOutlined : DarkModeOutlined;

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
					}
				}
			}
		},
		palette: {
			mode: GetColorMode(document),
		},
	});

	return (
		<ThemeProvider theme={theme}>
			<div className={classes.headerOuter}>
				<div className={classes.headerContentFlex}>
					{ Hamburger && <IconButton className={classes.headerHamburger} onClick={HamburgerClickEvent}><Menu fontSize="small" key={refresh} className={classes.headerIcon} /></IconButton> }
					<span className={classes.headerTitle} style={{ marginLeft: Hamburger ? '1.5rem' : '0rem' }}>
						Latin Lookup
						<div className={classes.versionHolder}>
							<span className={classes.versionName}>α</span>
						</div>
					</span>
				</div>
				<div className={classes.headerContentFlex}>
					<IconButton className={classes.headerHamburger} onClick={() => {
						SwitchColorTheme();
						setRefresh(Math.random());
					}}><ThemeChangeIcon fontSize="small" className={classes.headerIcon} /></IconButton>
					<IconButton className={classes.headerHamburger} onClick={() => {
						setSearchBoxOpen(true);
					}}><SearchOutlined fontSize="small" className={classes.headerIcon} /></IconButton>
				</div>
			</div>
		</ThemeProvider>
	)
}