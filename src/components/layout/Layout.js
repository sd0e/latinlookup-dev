import React from 'react';

import classes from './Layout.module.css';
import Search from '../ui/Search';

export default function Layout({ children, searchBoxOpen, setSearchBoxOpen }) {
	return (
		<div className={classes.divOuter}>
			{ searchBoxOpen === true ? <div className={classes.searchOuter}>
				<div className={classes.searchInner}>
					<Search submit={setSearchBoxOpen} />
				</div>
			</div> : null }
			<main>
				{children}
			</main>
		</div>
	)
}