import React, { useEffect, useState } from 'react';
import { createTheme, Drawer, ThemeProvider } from '@mui/material';

import LeftColumn from '../components/ui/LeftColumn';
import Header from '../components/layout/Header';
import classes from './Home.module.css';
import XHRGetRequest from '../scripts/XHRGetRequest';
import FormatCurrentElements from '../scripts/FormatCurrentElements';

const theme = createTheme({
	components: {
		MuiDrawer: {
			styleOverrides: {
				paper: {
					background: "#111111",
					padding: "1.5rem"
				}
			}
		}
	}
});

export default function Home({ searchBoxOpen, setSearchBoxOpen }) {
	const [smallScreen, setSmallScreen] = useState(false);
	const [drawerState, setDrawerState] = useState(false);
	const [currentWord, setCurrentWord] = useState(['Enter a word', false, true, 'Enter a word']);
	const [loading, setLoading] = useState(false);

	// Format of wordsList: [storedWord (string), isCurrentWord (boolean), hasBeenLoaded (boolean), displayWord (string)]
	const [wordsList, setWordsList] = useState([["duxit", false, false, "duxit"], ["capio", false, false, "capio"], ["^captus", false, false, "captus"], ["^capti", false, false, "capti"], ["grammar", false, false, "grammar"], ["do", false, false, "do"]]);

	wordsList.forEach((wordList, idx) => {
		if (window[wordList[3]] === undefined) {
			XHRGetRequest(`https://crossrun.onrender.com/https://en.wiktionary.org/api/rest_v1/page/html/${wordList[3]}`, 'document').then(res => {
				window[wordList[3]] = res;
				let tempWordsList = wordsList;
				tempWordsList[idx][2] = true;
				setWordsList(tempWordsList);
			});
		};
	});

	const toggleDrawerState = () => setDrawerState(!drawerState);

	var lastUpdate = new Date().getTime();
	var awaitingCheck = false;

	const checkScreenSize = () => {
		lastUpdate = new Date().getTime();
		if (window.innerWidth < 700 && !smallScreen) {
			setSmallScreen(true);
		} else if (window.innerWidth >= 700 && smallScreen) {
			setSmallScreen(false);
		};
	}

	checkScreenSize();

	// When the window resizes, trigger the checkScreenSize if it has not already been triggered in the past 200 milliseconds
	window.addEventListener('resize', () => {
		if (new Date().getTime() - lastUpdate > 200) checkScreenSize();
		if (awaitingCheck === false) awaitingCheck = window.setTimeout(checkScreenSize, 200);
	});

	const leftColumnStyles = { width: "15rem", padding: "2rem", borderRight: "2px solid rgba(242, 242, 242, 0.05)" };

	const changeCurrentWord = word => {
		wordsList.forEach((wordArray, idx) => {
			if (wordArray[0] === word) {
				wordArray[3] = word;
				if (wordArray[3].includes('^')) {
					wordArray[3] = wordArray[3].substr(1);
				}
				setCurrentWord(wordArray);
				let tempWordsList = wordsList;
				tempWordsList[idx][1] = true;
				setWordsList(tempWordsList);
			} else if (wordArray[1] === true) {
				let tempWordsList = wordsList;
				tempWordsList[idx][1] = false;
				setWordsList(tempWordsList);
			}
		})
	}

	const addWord = word => {
		let wordFound = false;

		// Sets the current word to it if it already exists
		for (let idx = 0; idx < wordsList.length; idx++) {
			const wordArray = wordsList[idx];
			if (wordArray[0] === word) {
				wordFound = true;
				changeCurrentWord(word);
			} else if (wordArray[3] === word) {
				wordFound = true;
				changeCurrentWord(wordArray[0]);
			}
		}
		
		// If the word isn't found, it adds the new word then switches to it
		if (!wordFound) {
			setLoading(true);
			const displayWord = word.includes('^') ? word.substring(1) : word;

			XHRGetRequest(`https://crossrun.onrender.com/https://en.wiktionary.org/api/rest_v1/page/html/${displayWord}`, 'document').then(res => {
				window[displayWord] = res;
				let tempWordsList = wordsList;
				wordsList.push([word, true, true, displayWord]);
				setWordsList(tempWordsList);
				addWord(displayWord);
				setLoading(false);
			});
		}
	}

	window['addWord'] = addWord;

	useEffect(() => {
		if (searchBoxOpen !== true && searchBoxOpen !== false && searchBoxOpen !== '' && typeof searchBoxOpen === 'string') {
			const words = searchBoxOpen.split(' ');
			words.forEach(word => {
				addWord(word);
			});
		}
	}, [searchBoxOpen]);

	const ContextMenu = () => <LeftColumn ClickEvent={e => {
		if (e) {
			let word;
			if (e.target.id.includes('word-')) {
				word = e.target.id.split('word-')[1];
			} else if (e.target.parentElement.id.includes('word-')) {
				word = e.target.parentElement.id.split('word-')[1];
			}
			changeCurrentWord(word);
		}
		if (smallScreen) toggleDrawerState();
	}} WordList={wordsList} Selected={currentWord} setSearchBoxOpen={setSearchBoxOpen} smallScreen={smallScreen} />

	return (
		<ThemeProvider theme={theme}>
			<div style={{ height: '100%' }}>
				<Header Hamburger={smallScreen} HamburgerClickEvent={toggleDrawerState} />
				{ smallScreen && <Drawer open={drawerState} anchor="left" onClose={toggleDrawerState}>
					<ContextMenu setSearchBoxOpen={setSearchBoxOpen} smallScreen={smallScreen} />
				</Drawer> }
				<table className={classes.homeOuter}>
					<tbody>
						<tr>
							<td style={ smallScreen ? { ...leftColumnStyles, display: 'none' } : leftColumnStyles }>
								<ContextMenu />
							</td>
							<td>
								<div className={classes.loadingOuter} style={!loading ? { display: 'none' } : null}>
									<div className={classes.loadingInner}></div>
								</div>
								<div className={classes.mainContentOuter}>
									<div className={classes.mainPage}>
										<span className={classes.currWord}>{currentWord[3]}</span>
										{currentWord[2] && currentWord[0] !== 'Enter a word' &&
											<div className={classes.wordInfoInner}>
												<FormatCurrentElements HTML={window[currentWord[3]]} />
											</div>
										}
									</div>
								</div>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</ThemeProvider>
	)
}
