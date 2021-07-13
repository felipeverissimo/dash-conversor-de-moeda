import React from 'react';
import CustomMDXDocumentation from './Spotlight.mdx' 


import { Spotlight } from './Spotlight';

export default {
  title: 'Spotlight',
  component: Spotlight,
  argTypes: {
    themeOfSpotlight: {
      options: ['classic', 'spotlight-XL', 'spotlight-XXL'],
      control: { type: 'select' } 
    },
  },
  parameters: { 
    docs: { 
      page: CustomMDXDocumentation, 
    } 
  },
};

const Template = (args) => <Spotlight {...args} />;

export const BasicSpotlight = Template.bind({});

