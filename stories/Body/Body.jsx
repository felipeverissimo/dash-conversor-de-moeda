import React from 'react'
import PropTypes from 'prop-types';
import {ConversionBody} from './body-styling'



export  const Body =  ({children}) =>{
    return (

        <ConversionBody>
            <div className='container'>
              {children}  
            </div>
        </ConversionBody>
  )
}

Body.propTypes = {
   /**
   Checks if the button should be disabled
  */
};
