import React from 'react';
import PropTypes from 'prop-types';
import { WrapperInput, InputTitle } from './input-styling'
import { useState } from 'react';

/**
* Basic input type text for build component for user interaction
*/
export const Input = ( {showPrefix,
    prefix,
    showSuffix,
    suffix,
    label,
    customPlaceholder,
    customName,
    error,
    value,
    onChange,
    onBlur,onKeyPress}) => { 
    return (
       <>
        <div>
            <InputTitle className={error? 'input-get-error': ''} >{label}</InputTitle>
                <WrapperInput  className={error? 'input-get-error': ''}>
                    {showPrefix ? <span className={value? 'input-get-value': ''} >{prefix}</span>:'' }
                    <input 
                        type="text"
                        name={customName}
                        placeholder={customPlaceholder}
                        value={value}
                        onChange={onChange}
                        onBlur={onBlur}
                        onKeyPress={onKeyPress}
                        maxLength="10"
                        ></input>
                    {showSuffix ? <span className={value? 'input-get-value': ''}>{suffix}</span>:'' }
                </WrapperInput> 
        </div>
       </>
    )
}

Input.propTypes = {
    showPrefix: PropTypes.bool,
    prefix: PropTypes.string,
    label: PropTypes.string.isRequired,
    showSuffix: PropTypes.bool,
    suffix: PropTypes.string,
    customPlaceholder: PropTypes.string,
    customName: PropTypes.string.isRequired,
    value: PropTypes.string,
    error:PropTypes.bool,
  };
  