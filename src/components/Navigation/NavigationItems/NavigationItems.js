import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.css';

const navigationItems = (props) => {
    const wrapperClasses = [classes.NavigationItems];
    if (props.className) wrapperClasses.push(props.className);
    return (
        <div className={wrapperClasses.join(' ')}>
            <NavigationItem onClick={props.onClick} className={props.navItemClassName} to="/">Hjem</NavigationItem>
            <NavigationItem onClick={props.onClick} className={props.navItemClassName} to="/vedtekter">Vedtekter</NavigationItem>
            <NavigationItem onClick={props.onClick} className={props.navItemClassName} to="/ressurser">Ressurser</NavigationItem>
            <NavigationItem onClick={props.onClick} className={props.navItemClassName} to="/blimedlem">Bli medlem</NavigationItem>
        </div>
    );
};

export default navigationItems;