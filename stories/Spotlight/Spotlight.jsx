import React from 'react';
import PropTypes from 'prop-types';
import {WrapperSpotlight} from './Spotlight-styling'

export const Spotlight = ({firstSpotlight,  themeOfSpotlight}) =>{
    return (
        <>
            <WrapperSpotlight className={themeOfSpotlight} >{firstSpotlight} </WrapperSpotlight>
        </>
    )
}

Spotlight.propTypes = {
    firstSpotlight: PropTypes.string,
    themeOfSpotlight: PropTypes.string.isRequired,
};

Spotlight.defaultProps = {
    firstSpotlight:"Spotlight",
    themeOfSpotlight: "classic",
};