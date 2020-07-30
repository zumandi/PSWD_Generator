import React, { useState } from 'react';

import classes from './Options.module.scss';
import className from 'classnames';

import RadioButton from './RadioButton/RadioButton';
import InputField from './InputField/InputField';

const Options = (props) => {
    const [state, setState] = useState({
        open : false,
    });

    let optionsInputs = Object.keys(props.options).map((key, index) => {
            const opt = props.options[key];
            if(typeof opt.value  === 'string'){
                return (
                    <InputField 
                        key={index} 
                        label={opt.label} 
                        active={opt.value !== ''} 
                        changehandler={(e) => props.onChangeOption(e, key)} 
                        value={opt.value}
                    />
                );
            } else {
                return <RadioButton key={index} label={opt.label} active={opt.value} clickHandler={() => props.onToggle(key)} />
            }
        })

    function onToggleHandler() {
        setState(prevState => ({
            ...prevState,
            open : !prevState.open
        }))
    }
    
    const optionWrapperClasses = className({
        [classes.Wrapper] : true,
        [classes.Active] : state.open,
    })
    return(
        <div className={optionWrapperClasses}>
        <button 
            className={classes.Open}
            onClick={onToggleHandler}
        >Options</button>
        {state.open ? <div className={classes.Options}>
            {optionsInputs}
        </div> : null}
        
        </div>
    )
}

export default Options