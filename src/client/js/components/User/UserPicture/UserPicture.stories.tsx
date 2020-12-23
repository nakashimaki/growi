
import React from 'react';
import { Story } from '@storybook/react/types-6-0';

import { withKnobs } from '@storybook/addon-knobs';
import UserPicture from './UserPicture';

export default {
  title: 'atoms/UserPicture',
  decorators: [withKnobs],
};

export const _Default: Story = () => {
  return (
    <UserPicture user={{ username: 'testUsername', name: 'testName' }} />
  );
};
