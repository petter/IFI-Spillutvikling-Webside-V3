import React, { Component } from 'react';
import { connect } from 'react-redux';

const vedtekter = (props) => {
    return (
        <div>
            <h1>Vedtekter</h1>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        vedtekter: state.vedtekter,
    }
}

export default connect(mapStateToProps)(vedtekter);