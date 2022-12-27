import { Check } from 'phosphor-react'
import { ComponentProps } from 'react'
import { CheckboxStyled, CheckboxStyledIndicator } from './styles'

export interface CheckboxProps extends ComponentProps<typeof CheckboxStyled> {}

export function Checkbox(props: CheckboxProps) {
  return (
    <CheckboxStyled {...props}>
      <CheckboxStyledIndicator asChild>
        <Check weight="bold" />
      </CheckboxStyledIndicator>
    </CheckboxStyled>
  )
}

Checkbox.displayName = 'Checkbox'
