import { Root, Image, Fallback } from '@radix-ui/react-avatar'
import { styled } from '../../styles'

export const AvatarStyled = styled(Root, {
  borderRadius: '$full',
  display: 'inline-block',
  width: '$12',
  height: '$12',
  overflow: 'hidden',
})

export const AvatarStyledImage = styled(Image, {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 'inherit',
})

export const AvatarStyledFallback = styled(Fallback, {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$gray600',
  color: '$gray800',

  svg: {
    width: '$6',
    height: '$6',
  },
})
