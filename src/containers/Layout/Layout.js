import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Navigation from '../../components/Navigation/Navigation';
import Footer from '../../components/Footer/Footer';

export default class Layout extends Component {
    render() {
        return (
            <div>
                <Navigation />
                {this.props.children}
                <Footer />
            </div>
        );
    }
}

Layout.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array
    ])
}