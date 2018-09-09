import React from 'react';

import classes from './HamburgerButton.css';

const hamburgerButton = (props) => {
    return (
        <button onClick={props.onClick} className={classes.HamburgerButton}>
            <div className={classes.HamburgerWrapper}>
                <div className={classes.HamburgerBar}></div>
                <div className={classes.HamburgerBar}></div>
                <div className={classes.HamburgerBar}></div>
            </div>
        </button>
    );
};

export default hamburgerButton;