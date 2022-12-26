import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@caju-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children: 'Example Text!',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Example Text Strong!',
    as: 'strong',
  },
}
