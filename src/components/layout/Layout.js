import React from 'react';

import classes from './Layout.module.css';
import Search from '../ui/Search';
import About from './About';

export default function Layout({ children, searchBoxOpen, setSearchBoxOpen, aboutBoxOpen, setAboutBoxOpen, refresh }) {	
	const searchBoxOuterClick = (e) => {
		if (e.target === e.currentTarget) setSearchBoxOpen(false);
	}

	const aboutBoxOuterClick = (e) => {
		if (e.target === e.currentTarget) setAboutBoxOpen(false);
	}

	return (
		<div className={classes.divOuter}>
			{ searchBoxOpen === true ? <div className={classes.searchOuter} onClick={searchBoxOuterClick}>
				<div className={classes.searchInner}>
					<Search submit={setSearchBoxOpen} setSearchBoxOpen={setSearchBoxOpen} refresh={refresh} />
				</div>
			</div> : null }
			{ aboutBoxOpen === true ? <div className={classes.searchOuter} onClick={aboutBoxOuterClick}>
				<div className={classes.searchInner}>
					<About setAboutBoxOpen={setAboutBoxOpen} refresh={refresh} />
				</div>
			</div> : null }
			<main>
				{children}
			</main>
		</div>
	)
}