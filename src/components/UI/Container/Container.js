import React from 'react';
import PropTypes from 'prop-types';

import classes from './Container.css';

const container = (props) => {
    let containerClass = [classes.Container];
    if (props.className)
        containerClass.push(props.className);

    return (
        <div className={containerClass.join(' ')}>
            {props.children}
        </div>
    );
};

container.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
}

export default container;