import { ComponentProps } from 'react'
import {
  TextInputStyled,
  TextInputStyledContainer,
  TextInputStyledPrefix,
} from './styles'

export interface TextInputProps extends ComponentProps<typeof TextInputStyled> {
  prefix?: string
}

export function TextInput({ prefix, ...props }: TextInputProps) {
  return (
    <TextInputStyledContainer>
      {!!prefix && <TextInputStyledPrefix>{prefix}</TextInputStyledPrefix>}
      <TextInputStyled {...props} />
    </TextInputStyledContainer>
  )
}

TextInput.displayName = 'TextInput'
