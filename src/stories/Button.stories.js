import React from 'react';

import { Button } from './Button';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: 'radio',
        options: ['default', 'outline', 'text']
      }
    },
    startIcon: {
      control: {
        type: 'radio',
        options: ['face', 'language', 'lock', 'schedule', 'android']
      }
    },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
  isDisabledShadow: false,
  disabled: false,
  endIcon: '',
  size: '',
  color: ''
};
