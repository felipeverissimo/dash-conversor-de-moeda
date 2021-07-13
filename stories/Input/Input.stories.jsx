import React, {useState} from 'react';
import { Input } from './Input';
import CustomMDXDocumentation from "./Input.mdx";



export default {
  title: 'Input',
  component: Input,
  parameters: { 
    docs: { 
      page: CustomMDXDocumentation, 
    } 
  },
};

const Template = (args) => {
return <Input  {...args} />
};

export const BasicInput = Template.bind({});

BasicInput.args = {
  label: 'Dólar',
  showPrefix: true,
  prefix:'$',
  showSuffix: false,
  suffix:'%',
  customName: 'Nameless',
  customPlaceholder:'Placeholder',
  value:'',
  error: false,
};

