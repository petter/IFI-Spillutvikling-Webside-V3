import React from 'react';
import { Link } from 'react-router-dom';

import classes from './404.css';

const _404 = () => {
    return (
        <div className={classes._404}>
            <img className={classes._404Image} alt="sad pepe" src="https://pre00.deviantart.net/1226/th/pre/f/2015/148/0/5/sad_pepe__feels_bad_man__vector_by_hirussai-d8uq43y.png" />
            <h1 className={classes._404Title}>:(</h1>
            <p className={classes._404Body}>
                Beklager, vi finner ikke siden du leter etter.<br />
                <Link to="/" className={classes._404Link}>Gå tilbake til forsiden:)</Link>
            </p>
        </div>
    );
};

export default _404;