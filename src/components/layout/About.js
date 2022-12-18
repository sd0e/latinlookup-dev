import React from 'react';

import classes from './About.module.css';
import appInfo from '../../appInfo.json';

export default function About({ setAboutBoxOpen }) {
    return (
        <div className={classes.aboutOuter}>
            <div>
                <span className={classes.aboutName}>Latin Lookup</span>
                <span className={classes.aboutVersionInfo}>
                    Version
                    <span className={classes.aboutVersionNumber}>{appInfo.VERSION_NUMBER}</span>
                </span>
            </div>
        </div>
    )
}