import React from 'react';
import PropTypes from 'prop-types';
import {InputTitle} from '../Input/input-styling'
import {WrapperRadio} from './Radio-styling'
import {printRadioItems} from './radio-items'

/**
* Basic input type radio for build component for user interaction
*/
export const Radio = ({label, ...props }) =>{
    return (
        <>
        <WrapperRadio>            
           <InputTitle>{label}</InputTitle>
           {printRadioItems(props)}
        </WrapperRadio>           
        </>
    )
}

Radio.propTypes = {    
    label: PropTypes.string.isRequired,
    customName: PropTypes.string.isRequired,
    customOptions: PropTypes.array.isRequired
  };

Radio.defaultProps = {
    label: 'Tipo de compra',
    customName: 'nameless-radio',
    customOptions: ['Dinheiro', 'Cartão']
};
  