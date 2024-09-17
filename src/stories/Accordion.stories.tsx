import type { Meta, StoryObj } from '@storybook/react';
import Accordion from 'components/Accordion/Accordion'; // Accordion이 React 컴포넌트인지 확인
import React from 'react';

type PagePropsAndCustomArgs = React.ComponentProps<typeof Accordion>;

const meta: Meta<PagePropsAndCustomArgs> = {
  component: Accordion,
  render: (args) => (
    <Accordion>
      {args.children}
    </Accordion>
  ),
};

export default meta;

type Story = StoryObj<PagePropsAndCustomArgs>;

export const CustomFooter: Story = {
  args: {
    children: "이것은 커스텀 푸터입니다", // 예시 자식 콘텐츠
  },
};
