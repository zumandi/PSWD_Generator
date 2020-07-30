import React from 'react';

import classes from './Button.module.scss';

const Button = (props) => {
    return(
        <button 
            className={classes.Button}
            onClick={props.generateHandler}
        >Generate</button>
    )
}

export default Button