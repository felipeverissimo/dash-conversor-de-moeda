import React from 'react'
import { WrapperButton , AsciiIcon} from './button-styling'
import PropTypes from 'prop-types';



export  const Button =  ({disabledStatus, label, handleOnClick, buttonType}) =>{
    return (
        <>
          <WrapperButton 
            disabled={disabledStatus} 
            onClick={handleOnClick}
            className={buttonType === 'primary'?'primary':'secondary'}
            >
              <AsciiIcon  className={buttonType === 'primary'?'primary':'secondary'} /> {label}
          </WrapperButton>
        </>
  )
}

Button.propTypes = {
   /**
   Checks if the button should be disabled
  */
  disabledStatus: PropTypes.bool,
  label: PropTypes.string.isRequired,
  buttonType: PropTypes.string,
  handleOnClick: PropTypes.func,
};
