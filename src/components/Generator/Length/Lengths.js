import React from 'react';

import classes from './Length.module.scss';


const Length = (props) => {
    return(
        <div className={classes.Length}>
            <label>Length</label>
            <span 
                className={classes.Sub}
                onClick={() => props.onClickHandler("sub")}
            >-</span>
            <input 
                type="range" 
                min={props.minLength} 
                max={props.maxLength} 
                id="length"
                value={props.length}
                onChange={props.onChangeHandler}
            />
            <span 
                className={classes.Add}
                onClick={() => props.onClickHandler("add")}
            >+</span>
            <input 
                type="number"
                min={props.minLength} 
                max={props.maxLength} 
                value={props.length}
                onChange={props.onChangeHandler}
             />
        </div>
    )
}

export default Length