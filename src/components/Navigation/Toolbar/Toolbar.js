import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';

import NavigationItems from '../NavigationItems/NavigationItems';
import logo from '../../../assets/img/IconWhite.svg';
import classes from './Toolbar.css';

export default class Toolbar extends Component {

    state = {
        isHome: window.location.pathname === '/',
    }

    componentDidMount = () => {
        // Only fade in toolbar on homepage
        if (this.state.isHome) {
            $('#toolbar').delay(300).fadeIn(1000);
        }

        // Fade in logo after 
    }

    render = () => {
        // Don't display toolbar on homepage, it will fade in.
        let homeStyle = { display: "none" };
        if (!this.state.isHome) {
            homeStyle = {};
        }
        return (
            <nav className={classes.Nav} id="toolbar" style={homeStyle}>
                <Link to="/" style={{ display: "none" }} id="LogoLink">
                    <img src={logo} alt="IFI Spillutvikling logo" className={classes.NavLogo} />
                </Link>
                <NavigationItems />
            </nav>
        );
    }
}