import React from 'react';
import PropTypes from 'prop-types';
import { Logo } from '../Logo/Logo';
import { Spotlight } from '../Spotlight/Spotlight';
import { Subtitle } from '../Subtitle/Subtitle';

import './header.css';


export const Header = ({}) => (

  <header>
    <div className="wrapper">
        <Logo  subTitle="Currency" />
      <div>
          <Spotlight doubleSpot={false} firstSpotlight={'SpotLight'} />
          <Subtitle  />
      </div>
    </div>
  </header>
);

Header.propTypes = {};

Header.defaultProps = {};
