import React from 'react';
import PropTypes from 'prop-types';
import {InputTitle} from '../Input/input-styling'
import {WrapperRadio} from './Radio-styling'
import {printRadioItems} from './radio-items'

/**
* Basic input type radio for build component for user interaction
*/
export const Radio = ({label, customName, customOptions,handleOnClick,onBlur , value}) =>{
    return (
        <>
        <WrapperRadio>            
           <InputTitle>{label}</InputTitle>
           <label htmlFor={customOptions[0]} >
                    <input type="radio" value={customOptions[0]} id={customOptions[0]} name={customName} onChange={handleOnClick} 
                        onBlur={onBlur}  key={customOptions[0]} checked={customOptions[0] === value }
                    /> 
               {customOptions[0]}</label>
               <label htmlFor={customOptions[1]} >
                    <input type="radio" value={customOptions[1]} id={customOptions[1]} name={customName} onChange={handleOnClick} 
                        onBlur={onBlur}  key={customOptions[1]} checked={customOptions[1] === value }
                    /> 
               {customOptions[1]}</label>
           {/* {printRadioItems(props)} */}
        </WrapperRadio>           
        </>
    )
}

Radio.propTypes = {    
    label: PropTypes.string.isRequired,
    customName: PropTypes.string.isRequired,
    customOptions: PropTypes.array.isRequired,
    onChange: PropTypes.func,

  };

Radio.defaultProps = {
    label: 'Tipo de compra',
    customName: 'nameless-radio',
    customOptions: ['Dinheiro', 'Cartão']
    
};
  