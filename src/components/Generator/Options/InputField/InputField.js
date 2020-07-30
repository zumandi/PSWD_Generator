import React from 'react';
import classNames from 'classnames';

import classes from './InputField.module.scss';

const InputField = (props) => {
    let input_class = classNames({
        [classes.InputField] : true,
        [classes.Active] : props.active
    });

    return(
        <div className={input_class}>
            <span className={classes.Label}>{props.label}</span>
            <input type="text" onChange={props.changehandler} value={props.value} />
        </div>
    )
}

export default InputField