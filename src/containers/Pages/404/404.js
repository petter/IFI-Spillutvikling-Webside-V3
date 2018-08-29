import React from 'react';
import { Link } from 'react-router-dom';

import classes from './404.css';

const _404 = () => {
    return (
        <div className={classes._404}>
            <h1 className={classes._404Title}>:(</h1>
            <p className={classes._404Body}>
                Beklager, vi finner ikke siden du leter etter.<br />
                <Link to="/" className={classes._404Link}>Gå tilbake til forsiden:)</Link>
            </p>
        </div>
    );
};

export default _404;