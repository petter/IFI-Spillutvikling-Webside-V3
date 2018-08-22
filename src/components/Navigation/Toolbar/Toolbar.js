import React from 'react';

import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './Toolbar.css';

const toolbar = (props) => {
    return (
        <nav className={classes.Nav}>
            <NavigationItems />
        </nav>
    );
};

export default toolbar;