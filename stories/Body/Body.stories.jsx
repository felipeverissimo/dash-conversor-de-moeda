import React from 'react';
import CustomMDXDocumentation from './Body.mdx' 


import { Body } from './Body';

export default {
  title: 'Body',
  component: Body,
  parameters: { 
    docs: { 
      page: CustomMDXDocumentation, 
    } 
  },
};

const Template = (args) => <Body {...args} />;

export const ConversionBody = Template.bind({});


