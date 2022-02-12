import React from 'react';

import classes from './Layout.module.css';

export default function Layout({ children }) {
	return (
		<div className={classes.divOuter}>
			<main>
				{children}
			</main>
		</div>
	)
}