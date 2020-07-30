import React from 'react';

import classes from './Output.module.scss';

const Output = (props) => {
    return(
        <div className={classes.Output}>
            <span className={classes.Password}>
                <input 
                    type="text" 
                    value={props.password} 
                    onChange={props.onChangePassword} 
                    placeholder="PASSWORD"
                />
            </span>
            <span 
                className={classes.Copy}
                onClick={props.onCopyClick}
            >
                <svg id="copy" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 25">
                    <g id="copy-group" data-name="Copy">
                        <path fill="#fafafa" d="M3 18a1 1 0 01-1-1V3a1 1 0 011-1h13a1 1 0 011 1h2a3 3 0 00-3-3H3a3 3 0 00-3 3v14a3 3 0 003 3z"/>
                        <path fill="#fafafa" d="M20 25H8a3 3 0 01-3-3V8a3 3 0 013-3h12a3 3 0 013 3v14a3 3 0 01-3 3zM8 7a1 1 0 00-1 1v14a1 1 0 001 1h12a1 1 0 001-1V8a1 1 0 00-1-1z" id="Rechteck_4" data-name="Rechteck 4"/>
                    </g>
                </svg>
            </span>
        </div>
    )
}

export default Output