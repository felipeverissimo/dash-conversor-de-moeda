import React from 'react';
import { Radio } from './Radio';
import CustomMDXDocumentation from './Radio.mdx' 

export default {
  title: 'Radio',
  component: Radio,
  parameters: { 
    docs: { 
      page: CustomMDXDocumentation, 
    } 
  },
};

const Template = (args) => <Radio {...args} />;

export const BasicRadio = Template.bind({});

BasicRadio.args = {
  label: 'Dólar',
  customName: 'Nameless',
  error: false,
  customOptions: ['Dinheiro', 'Cartão']
};