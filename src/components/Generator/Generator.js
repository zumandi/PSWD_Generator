import React, { useState } from 'react';

import classes from './Generator.module.scss';

import Output from './Output/Output';
import Button from './Button/Button';
import Options from './Options/Options';
import Length from './Length/Lengths';
import Strengthometer from '../Strengthometer/Strengthometer';

const Generator = () => {
    const [state, setState] = useState({
        length : 16,
        maxLength : 32,
        minLength : 4,
        password : '',
        msg: '',
        options : {
            simpleSymbols : {
                label : 'Simple Symbols',
                value : true,
            },
            complexSymbols : {
                label : 'Complex Symbols',
                value : true,
            },
            umlauts : {
                label : 'Umlauts',
                value : false,
            },
            numbers : {
                label : 'Numbers',
                value : true,
            },
            uppercase : {
                label : 'Uppercase',
                value : true,
            },
            lowercase : {
                label : 'Lowercase',
                value : true,
            },
            exclude : {
                label : 'Exclude',
                value : '',
            },
        }
    });

    const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    const upperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    const lowerUmlauts = ["ä", "ü", "ö"];
    const upperUmlauts = ["Ä", "Ü" , "Ö"];
    const simpleSymbols = ["!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/"];
    const complexSymbols = [":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
    

    function onLengthChangeHandler(event) {
        event.preventDefault();
        let newLength = (event.target.value <= 32) ? event.target.value : 32;
        newLength = (event.target.value <= 4) ? 4 : newLength;

        setState({
            ...state,
            length : newLength,
        });
    }

    function onGenerateHanlder() {
        let chars = [];
        if(state.options.numbers.value){ chars.push(...numbers); }
        if(state.options.lowercase.value){ chars.push(...lowerLetters); }
        if(state.options.uppercase.value){ chars.push(...upperLetters); }
        if(state.options.umlauts.value && state.options.lowercase.value){ chars.push(...lowerUmlauts); }
        if(state.options.umlauts.value && state.options.uppercase.value){ chars.push(...upperUmlauts); }
        if(state.options.simpleSymbols.value){ chars.push(...simpleSymbols); }
        if(state.options.complexSymbols.value){ chars.push(...complexSymbols); }
        if(state.options.exclude.value !== ''){
            const exclude = state.options.exclude.value.split('');
            chars = chars.filter((char) => {
                return !exclude.includes(char);
            });
        }
        
        let pswd = '';
        for(let i = state.length; i > 0; i--){
            const rand = Math.floor(Math.random().toString() * chars.length);
            pswd += chars[rand];
        }

        setState({
            ...state,
            password : pswd,
        });

    }

    function onToggleOptionsHandler(key) {
        setState(prevState => ({
            ...prevState,
            options: {
                ...prevState.options,
            [key] : {
                ...prevState.options[key],
                value : ! prevState.options[key].value
            }
            }
        }));
    }

    function onChangeOptionsHandler(event, key) {
        const input = event.target.value;
        setState(prevState => ({
            ...prevState,
            options: {
                ...prevState.options,
                [key] : {
                    ...prevState.options[key],
                    value : input,
                }
            }
        }));
    }

    function onChangePasswordHandler(event){
        event.preventDefault();
        setState({
            ...state,
            password : event.target.value,
        })
    }
    function onLengthClickHandler(dir){
        let len = state.length;
        if(dir === "add"){
            if(state.length <= state.maxLength){
                len++;
            }
        } else if(dir === "sub"){
            if(state.length >= state.minLength){
                len--;
            }
        }

        setState(prevState => ({
            ...prevState,
            length : len
        }))
    }

    function onCopyClickHandler() {
        const pw = state.password;

        if (!navigator.clipboard) {
            fallbackCopyTextToClipboard(pw);
            return;
        }
        navigator.clipboard.writeText(pw).then(function() {
            displayMsg('Copied!');
        }, function(err) {
            displayMsg('OH NO! ERROR!');
        });
    }

    function displayMsg(text){
        setState(prevState => ({
            ...prevState,
            msg : text
        }));
        setTimeout(() => {
            setState(prevState => ({
                ...prevState,
                msg : ''
            }));
        }, 1000);
    }

    const message = (state.msg !== '') ? (<div className={classes.Msg}>
        <p>{state.msg}</p>
    </div>) : null;

    return(
        <div className={classes.Generator}>
            <Length 
                onChangeHandler={onLengthChangeHandler} 
                length={state.length} 
                onClickHandler={onLengthClickHandler}
                maxLength={state.maxLength}
                minLength={state.minLength}
            />
            <Output 
                password={state.password} 
                onChangePassword={onChangePasswordHandler} 
                onCopyClick={onCopyClickHandler}
            />
            <Button generateHandler={onGenerateHanlder} />
            <Options options={state.options} onToggle={onToggleOptionsHandler} onChangeOption={onChangeOptionsHandler} />
            <Strengthometer password={state.password} />
            {message}
        </div>
    )
}

export default Generator;

function fallbackCopyTextToClipboard(text) {
    var textArea = document.createElement("textarea");
    textArea.value = text;

    // Avoid scrolling to bottom
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
        var successful = document.execCommand('copy');
        var msg = successful ? 'successful' : 'unsuccessful';
        console.log('Fallback: Copying text command was ' + msg);
    } catch (err) {
        console.error('Fallback: Oops, unable to copy', err);
    }

    document.body.removeChild(textArea);
}