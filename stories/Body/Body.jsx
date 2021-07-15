import React from 'react'
import {ConversionBody} from './body-styling'

export  const Body =  ({children}) =>{
    return (

        <ConversionBody >
            <div className='container'>
              {children}  
            </div>
        </ConversionBody>
  )
}
