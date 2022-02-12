import React from 'react';

import classes from './Layout.module.css';
import Search from '../ui/Search';

export default function Layout({ children }) {
	return (
		<div className={classes.divOuter}>
			<div className={classes.searchOuter}>
				<div className={classes.searchInner}>
					<Search />
				</div>
			</div>
			<main>
				{children}
			</main>
		</div>
	)
}