import React from 'react';
import CustomMDXDocumentation from './Logo.mdx' 


import { Logo } from './Logo';

export default {
  title: 'Logo',
  component: Logo,
  parameters: { 
    docs: { 
      page: CustomMDXDocumentation, 
    } 
  },
};

const Template = (args) => <Logo {...args} />;

export const BasicLogo = Template.bind({});

