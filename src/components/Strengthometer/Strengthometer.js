import React from 'react';
import zxcvbn from 'zxcvbn';

import classNames from 'classnames';

import classes from './Strengthometer.module.scss';

const Strengthometer = (props) => {
    const strength = zxcvbn(props.password);

    const wrapperClass = classNames({
        [classes.Strengthometer] : true,
        [classes.Danger] : strength.score === 0,
        [classes.Low] : strength.score === 1,
        [classes.Medium] : strength.score === 2,
        [classes.Good] : strength.score === 3,
        [classes.Perfect] : strength.score === 4,
    })

    return(
        <>
        <div className={wrapperClass}>
            <div className={classes.Bar}></div>
        </div>
        <div className={classes.Label}>
            <span>Weak</span>
            <span>Medium</span>
            <span>Good</span>
            <span>Perfect</span>
        </div>
        </>
    )
}

export default Strengthometer