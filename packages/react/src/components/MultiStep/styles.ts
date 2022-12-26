import { styled } from '../../styles'
import { Text } from '../Text'

export const MultiStepStyled = styled('div', {})

export const MultiStepStyledLabel = styled(Text, {
  color: '$gray200',

  defaultVariants: {
    size: 'xs',
  },
})

export const MultiStepStyledSteps = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(var(--steps-size), 1fr)',
  gap: '$2',
  marginTop: '$1',
})

export const MultiStepStyledStep = styled('div', {
  height: '$1',
  borderRadius: '$px',
  backgroundColor: '$gray600',

  variants: {
    active: {
      true: {
        backgroundColor: '$gray100',
      },
    },
  },
})
