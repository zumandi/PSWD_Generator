import React from 'react';

import classes from './Title.module.scss';

const Title = () => {
    return (
        <header className={classes.Title}>
            <div className={classes.Password}>
                <span className={classes.P}>P</span>
                <span className={classes.S}>S</span>
                <span className={classes.W}>W</span>
                <span className={classes.D}>D</span>
            </div>
            <div className={classes.Generator}>
                <span>Generator</span>
            </div>
            <div className={classes.Shape}></div>
        </header>
    );
}

export default Title;