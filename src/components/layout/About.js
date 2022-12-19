import React from 'react';
import { createTheme, IconButton, ThemeProvider } from '@mui/material';
import { Close } from '@mui/icons-material';

import classes from './About.module.css';
import appInfo from '../../appInfo.json';
import GetColorMode from '../../scripts/GetColorMode';
import GetColorVariable from '../../scripts/GetColorVariable';

export default function About({ setAboutBoxOpen, refresh }) {
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
						color: GetColorVariable(document, '--muted-text'),
						marginLeft: "1.5rem",
					}
				}
			}
		},
		palette: {
			mode: GetColorMode(document),
		}
	});

    return (
        <ThemeProvider theme={theme}>
            <div className={classes.aboutOuter}>
                <div>
                    <div className={classes.aboutTopMenu}>
                        <div>
                            <span className={classes.aboutName}>Latin Lookup</span>
                            <span className={classes.aboutVersionInfo}>
                                Version
                                <span className={classes.aboutVersionNumber}>{appInfo.VERSION_NUMBER}</span>
                            </span>
                        </div>
                        <div>
                            <IconButton onClick={() => setAboutBoxOpen(false)} key={`about-exit-button-${refresh}`}><Close className={classes.aboutIconButtonIcon} fontSize="small" /></IconButton>
                        </div>
                    </div>
                    <span className={classes.aboutDescription}>{appInfo.LONG_DESCRIPTION}</span>
                    <span className={classes.aboutDescription}>Thanks to <a className={classes.aboutLinkStyle} href="https://en.wiktionary.org/wiki/Wiktionary:Main_Page" rel="noreferrer" target="_blank">Wiktionary</a> for making this possible.</span>
                    <span className={classes.aboutDescription}>This project was created by <a className={classes.aboutLinkStyle} href="https://github.com/sd0e" rel="noreferrer" target="_blank">sd0e</a> and <a className={classes.aboutLinkStyle} href="https://github.com/sd0e/latinlookup" rel="noreferrer" target="_blank">is available open-source on GitHub</a>.</span>
                    <span className={classes.aboutDescription}>A special thanks goes to <a className={classes.aboutLinkStyle} href="https://github.com/Mertzenich" rel="noreferrer" target="_blank">Mertzenich</a>, <a className={classes.aboutLinkStyle} href="https://github.com/TheVerl" rel="noreferrer" target="_blank">TheVerl</a> and <a className={classes.aboutLinkStyle} href="https://github.com/James-Livesey" rel="noreferrer" target="_blank">James-Livesey</a> for their contributions to the project.</span>
                    <span className={classes.aboutDescription}>This is the new generation of the website. The old one can still be used at <a className={classes.aboutLinkStyle} href="https://legacy.latinlookup.sebdoe.com/" rel="noreferrer" target="_blank">legacy.latinlookup.sebdoe.com</a></span>
                </div>
            </div>
        </ThemeProvider>
    )
}