import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../index';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    label: {
      control: 'text',
      description: 'Label for button',
    },
    type: {
      control: 'radio',
      description: 'Styling type',
      options: ['link', 'default']
    },
    size: {
      control: 'radio',
      description: 'Size of button',
      options: ['small', 'large', 'default']
    },
    effect: {
      control: 'radio',
      description: 'Animation effects',
      options: ['blink', 'default']
    },
    onClick: {
      description: 'Function that runs on click of the button',
    }
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {  
    label: 'Button',
    onClick: (e) => {
      alert('Button clicked');
    }
  },
};
 
