import React from 'react';
import PropTypes from 'prop-types';
import {WrapperSubtitle} from './Subtitle-styling'

export const Subtitle = ({subtitle, boldSubititle}) =>{
    return (
        <>
            <WrapperSubtitle ><b>{boldSubititle}</b>{subtitle} </WrapperSubtitle>
        </>
    )
}

Subtitle.propTypes = {
    subtitle: PropTypes.string.isRequired,
    boldSubititle: PropTypes.string,
};

Subtitle.defaultProps = {
    subtitle:"Dados disponibilizado pela AwesomeApi",
    boldSubititle:"",
};