import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.css';

const navigationItems = () => {
    return (
        <div className={classes.NavigationItems}>
            <NavigationItem to="/">Hjem</NavigationItem>
            <NavigationItem to="/vedtekter">Vedtekter</NavigationItem>
            <NavigationItem to="/ressurser">Ressurser</NavigationItem>
            <NavigationItem to="/blimedlem">Bli medlem</NavigationItem>
        </div>
    );
};

export default navigationItems;