import { User } from 'phosphor-react'
import { ComponentProps } from 'react'
import { AvatarStyled, AvatarStyledFallback, AvatarStyledImage } from './styles'

export interface AvatarProps extends ComponentProps<typeof AvatarStyledImage> {}

export function Avatar(props: AvatarProps) {
  return (
    <AvatarStyled>
      <AvatarStyledImage {...props} />

      <AvatarStyledFallback delayMs={600}>
        <User />
      </AvatarStyledFallback>
    </AvatarStyled>
  )
}

Avatar.displayName = 'Avatar'
