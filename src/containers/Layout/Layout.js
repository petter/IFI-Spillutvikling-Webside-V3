import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Toolbar from '../../components/Navigation/Toolbar/Toolbar';

export default class Layout extends Component {
    render() {
        return (
            <div>
                <Toolbar />
                {this.props.children}
            </div>
        );
    }
}

Layout.propTypes = {
    children: PropTypes.object
}