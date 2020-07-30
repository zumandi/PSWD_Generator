import React from 'react';
import classNames from 'classnames';

import classes from './RadioButton.module.scss';

const RadioButton = (props) => {
    let rbtn_class = classNames({
        [classes.RadioButton] : true,
        [classes.Active] : props.active
    });

    return(
        <div className={rbtn_class} onClick={props.clickHandler}>
            <span className={classes.Label}>{props.label}</span>
            <span className={classes.Icon}></span>
        </div>
    )
}

export default RadioButton