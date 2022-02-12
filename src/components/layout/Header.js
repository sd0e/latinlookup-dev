import React from 'react';
import { IconButton } from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import { withStyles } from '@material-ui/styles';

import classes from './Header.module.css';

const CustomIconButton = withStyles({
	root: {
		width: "1.3rem",
		height: "1.3rem",
		lineHeight: "1.3rem",
		verticalAlign: "middle",
		cursor: "pointer",
		color: "rgba(242, 242, 242, 0.8)",
		marginRight: "1.5rem",
	}
})(props => <IconButton {...props} />);

export default function Header({ Hamburger, HamburgerClickEvent }) {
	return (
		<div className={classes.headerOuter}>
			{ Hamburger && <CustomIconButton className={classes.headerHamburger} onClick={HamburgerClickEvent}><Menu fontSize="small" /></CustomIconButton> }
			<span className={classes.headerTitle}>
				Latin Lookup
				<div className={classes.versionHolder}>
					<span className={classes.versionName}>α</span>
				</div>
			</span>
		</div>
	)
}