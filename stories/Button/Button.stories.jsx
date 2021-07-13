import React from 'react';
import CustomMDXDocumentation from './Button.mdx' 


import { Button } from './Button';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    buttonType: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' }
    },
  },
  parameters: {
    actions: {
      handles: ['click'],
    },
  },
  parameters: { 
    docs: { 
      page: CustomMDXDocumentation, 
    } 
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  disabledStatus: false,
  label: 'Converter',
  buttonType:'primary',
  handleOnClick: () =>{alert('primary button clicked')}
};

export const secondary = Template.bind({});

secondary.args = {
  disabledStatus: false,
  label: 'Voltar',
  buttonType:'secondary',
  handleOnClick: () =>{alert('secondary button clicked')}
};

