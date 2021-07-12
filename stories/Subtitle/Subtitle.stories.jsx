import React from 'react';
import { Subtitle } from './Subtitle';
import CustomMDXDocumentation from './Subtitle.mdx' 


export default {
  title: 'Subtitle',
  component: Subtitle,
  parameters: { 
    docs: { 
      page: CustomMDXDocumentation, 
    } 
  },
};

const Template = (args) => <Subtitle {...args} />;

export const BasicSubtitle = Template.bind({});

