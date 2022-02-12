import React from 'react';

import classes from './LeftColumn.module.css';
import SearchBox from './SearchBox';
import HeadWord from './HeadWord';
import SubWord from './SubWord';

export default function LeftColumn({ ClickEvent, WordList }) {
	return (
		<div className={classes.leftColumn}>
			<SearchBox />
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