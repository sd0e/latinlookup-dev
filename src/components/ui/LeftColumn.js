import React from 'react';
import { createTheme, IconButton, ThemeProvider } from '@mui/material';
import { Close } from '@mui/icons-material';

import classes from './LeftColumn.module.css';
import SearchBox from './SearchBox';
import HeadWord from './HeadWord';
import SubWord from './SubWord';
import GetColorVariable from '../../scripts/GetColorVariable';
import GetColorMode from '../../scripts/GetColorMode';

export default function LeftColumn({ ClickEvent, WordList, setSearchBoxOpen, smallScreen, removeWord, setAboutBoxOpen, refresh }) {
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

	const openAboutBox = () => {
		setAboutBoxOpen(true);
		ClickEvent();
	}

	return (
		<ThemeProvider theme={theme}>
			<div className={classes.leftColumn}>
				<div className={classes.leftColumnContentDivider}>
					<div>
						{ smallScreen ? <div className={classes.mobileLeftColumnHolderHeader}>
							<SearchBox setSearchBoxOpen={setSearchBoxOpen} onClick={ClickEvent} />
							<IconButton onClick={ClickEvent} className={classes.mobileExitNav} aria-label="Close navigation menu"><Close className={classes.iconButtonIcon} /></IconButton>
						</div> : <SearchBox setSearchBoxOpen={setSearchBoxOpen} onClick={ClickEvent} /> }
						<div className={classes.wordList}>
							{WordList.map(word => {
								const selected = word[1];
								word = word[0];
								if (!word.includes('^')) {
									return <HeadWord Word={word} Click={ClickEvent} key={`container-${word}`} Selected={selected} removeWord={removeWord} refresh={refresh} />
								} else {
									return <SubWord Word={word} Click={ClickEvent} key={`container-${word}`} Selected={selected} removeWord={removeWord} refresh={refresh} />
								}
							}) }
						</div>
					</div>
					<div>
						<button onClick={openAboutBox} className={classes.bottomItems} aria-label="Open About menu">About</button>
					</div>
				</div>
			</div>
		</ThemeProvider>
	)
}