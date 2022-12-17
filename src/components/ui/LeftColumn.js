import React from 'react';
import { createTheme, IconButton } from '@mui/material';
import { Close } from '@mui/icons-material';

import classes from './LeftColumn.module.css';
import SearchBox from './SearchBox';
import HeadWord from './HeadWord';
import SubWord from './SubWord';

export default function LeftColumn({ ClickEvent, WordList, setSearchBoxOpen, smallScreen }) {
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
						marginLeft: "1.5rem",
					}
				}
			}
		},
		palette: {
			mode: 'dark',
		}
	});

	return (
		<div className={classes.leftColumn}>
			{ smallScreen ? <div className={classes.mobileLeftColumnHolderHeader}>
				<SearchBox setSearchBoxOpen={setSearchBoxOpen} onClick={ClickEvent} />
				<IconButton onClick={ClickEvent}><Close className={classes.iconButtonIcon} /></IconButton>
			</div> : <SearchBox setSearchBoxOpen={setSearchBoxOpen} onClick={ClickEvent} /> }
			<div className={classes.wordList}>
				{WordList.map(word => {
					const selected = word[1];
					word = word[0];
					if (!word.includes('^')) {
						return <HeadWord Word={word} Click={ClickEvent} key={`container-${word}`} Selected={selected} />
					} else {
						return <SubWord Word={word} Click={ClickEvent} key={`container-${word}`} Selected={selected} />
					}
				}) }
			</div>
		</div>
	)
}