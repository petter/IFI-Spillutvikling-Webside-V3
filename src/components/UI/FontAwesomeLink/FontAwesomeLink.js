import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

import classes from './FontAwesomeLink.css';

const fontAwesomeLink = (props) => {
    const linkClass = [classes.Link];
    const iconClass = [classes.Icon];
    if (props.className) linkClass.push(props.className);
    if (props.iconClassName) iconClass.push(props.iconClassName);
    return (
        <Link to={props.to} className={linkClass.join(' ')}>
            <FontAwesomeIcon icon={props.icon} size={props.size ? props.size : "3x"} className={iconClass.join(' ')} transform={props.transform} />
        </Link>
    );
};

fontAwesomeLink.propTypes = {
    to: PropTypes.string,
    icon: PropTypes.object.isRequired,
    iconClassName: PropTypes.string,
    className: PropTypes.string,
    size: PropTypes.string,
    transform: PropTypes.string,
}

export default fontAwesomeLink;