import React from 'react';

import classes from './Layout.module.css';
import Search from '../ui/Search';

export default function Layout({ children, searchBoxOpen, setSearchBoxOpen }) {
	const searchBoxOuterClick = (e) => {
		if (e.target === e.currentTarget) setSearchBoxOpen(false);
	}

	return (
		<div className={classes.divOuter}>
			{ searchBoxOpen === true ? <div className={classes.searchOuter} onClick={searchBoxOuterClick}>
				<div className={classes.searchInner}>
					<Search submit={setSearchBoxOpen} setSearchBoxOpen={setSearchBoxOpen} />
				</div>
			</div> : null }
			<main>
				{children}
			</main>
		</div>
	)
}