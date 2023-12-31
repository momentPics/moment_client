import type { Meta, StoryObj } from '@storybook/react';

import Footer from './Footer';

/**
 * 모먼트에서 사용하는 기본적인 푸터입니다.
 */

const meta: Meta<typeof Footer> = {
  title: 'Templates/Footer',
  component: Footer,
  tags: ['autodocs'],
  parameters: {
    layout: 'mobile',
    breakpoints: {
      breakpointNames: {
        small: '0',
        medium: '376',
        large: '1000',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  render: () => <Footer />,
};
