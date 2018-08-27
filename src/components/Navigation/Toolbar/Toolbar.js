import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import Color from 'color';

import NavigationItems from '../NavigationItems/NavigationItems';
import logo from '../../../assets/img/IconWhite.svg';
import classes from './Toolbar.css';

export default class Toolbar extends Component {

    state = {
        isHome: window.location.pathname === '/',
        logoOpacity: 0,
        bgColor: '',
    }

    componentDidMount = () => {
        this.setState({ bgColor: $("#toolbar").css('backgroundColor') });

        // Only fade in toolbar on homepage
        if (this.state.isHome) {
            $('#toolbar').delay(300).fadeIn(1000);
        }

        window.onscroll = () => {
            // Opacity will start changing when closing bottom of jumbo.
            const jumboBottomPos = $("#jumbotron").offset().top + $("#jumbotron").outerHeight();
            let opacity = (window.scrollY - jumboBottomPos + 150) / 150;
            opacity = Math.max(opacity, 0);
            opacity = Math.min(opacity, 1);
            this.setState({ logoOpacity: opacity });
        }
    }

    render = () => {
        console.log(this.state.bgColor);
        // Don't display toolbar on homepage, it will fade in.
        let navBarStyle = { display: "none" };
        if (this.state.bgColor !== '') {
            navBarStyle = { ...navBarStyle, backgroundColor: Color(this.state.bgColor).alpha(this.state.logoOpacity) }
        }
        if (!this.state.isHome) {
            navBarStyle = {};
        }


        let logoStyle = { display: "none", opacity: this.state.logoOpacity };
        if (this.state.logoOpacity > 0) {
            logoStyle = { ...logoStyle, display: "block" };
        }

        return (
            <nav className={classes.Nav} id="toolbar" style={navBarStyle}>
                <Link to="/" style={logoStyle} id="LogoLink">
                    <img src={logo} alt="IFI Spillutvikling logo" className={classes.NavLogo} />
                </Link>
                <NavigationItems />
            </nav>
        );
    }
}