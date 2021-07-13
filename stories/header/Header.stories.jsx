import React from 'react';
import CustomMDXDocumentation from './Header.mdx' 


import { Header } from './Header';

export default {
  title: 'Header',
  component: Header,
  parameters: { 
    docs: { 
      page: CustomMDXDocumentation, 
    } 
  },

};

const Template = (args) => <Header {...args} />;

export const BasicTemplate = Template.bind({});

