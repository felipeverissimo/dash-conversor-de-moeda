import React from 'react';
import PropTypes from 'prop-types';
import { Logo } from '../Logo/Logo';
import { Spotlight } from '../Spotlight/Spotlight';
import { Subtitle } from '../Subtitle/Subtitle';

export const Header = ({spotlight}) => (

  <header>
    <div className="wrapper">
        <Logo  subTitle="Currency" />
      <div>
          <Spotlight firstSpotlight={spotlight} />
          <Subtitle  />
      </div>
    </div>
  </header>
);
