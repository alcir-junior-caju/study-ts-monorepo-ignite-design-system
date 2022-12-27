import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@caju-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children: 'Example Text!',
    size: 'md',
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: 'select',
    },
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Example Text Strong!',
    as: 'strong',
  },
}
