
import React from 'react';
import { Story } from '@storybook/react/types-6-0';

import { withKnobs } from '@storybook/addon-knobs';
import { BookmarkButton } from '../../components/Atoms/BookmarkButton';

export default {
  title: 'atoms/BookmarkButton',
  decorators: [withKnobs],
};

export const _Default: Story = () => {
  return (
    <BookmarkButton />
  );
};
