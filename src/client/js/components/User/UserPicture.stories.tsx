
import React from 'react';
import { Story } from '@storybook/react/types-6-0';

import { withKnobs } from '@storybook/addon-knobs';

export default {
  title: 'atoms/UserPicture',
  decorators: [withKnobs],
};

export const _Default: Story = () => {
  return (
    <p>hoge</p>
  );
};
