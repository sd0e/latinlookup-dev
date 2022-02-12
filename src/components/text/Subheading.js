import React from 'react';
import classes from './TextStyles.module.css';

export default function Subheading({ children }) {
	return (
		<span className={classes.subheading}>{children}</span>
	)
}