import type { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps, Text } from '@caju-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: (
      <>
        <Text>Example Box!</Text>
      </>
    ),
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
