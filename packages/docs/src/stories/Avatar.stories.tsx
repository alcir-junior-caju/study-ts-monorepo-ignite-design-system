import type { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@caju-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/alcir-junior-caju.png',
    alt: 'Alcir Junior',
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const Fallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
