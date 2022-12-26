import type { StoryObj, Meta } from '@storybook/react'
import { Heading, HeadingProps } from '@caju-ui/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'Example Heading!',
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'Example Text H1!',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Por padrão o Heading sempre será um `h2`, mas podemos alterar isso com a `props` `as`.',
      },
    },
  },
}
