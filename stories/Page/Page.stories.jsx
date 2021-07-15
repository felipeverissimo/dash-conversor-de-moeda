import React from 'react';

import { Page } from './Page';
import * as HeaderStories from '../header/Header.stories';
import * as BodyStories from '../Body/Body.stories';

export default {
  title: 'Page',
  component: Page,
};

const Template = (args) => <Page {...args} />;

export const BasicTemplate = Template.bind({});
BasicTemplate.args = {
  ...HeaderStories.BasicTemplate.args,
  ...BodyStories.ConversionBody.args,

};


