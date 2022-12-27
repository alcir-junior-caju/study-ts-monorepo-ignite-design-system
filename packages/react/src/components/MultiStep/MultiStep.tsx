import {
  MultiStepStyled,
  MultiStepStyledLabel,
  MultiStepStyledStep,
  MultiStepStyledSteps,
} from './styles'

export interface MultiStepProps {
  size: number
  currentStep?: number
}

export function MultiStep({ size = 4, currentStep = 1 }: MultiStepProps) {
  return (
    <MultiStepStyled>
      <MultiStepStyledLabel>
        Passo {currentStep} de {size}
      </MultiStepStyledLabel>

      <MultiStepStyledSteps css={{ '--steps-size': size }}>
        {Array.from({ length: size }, (_, index) => index + 1).map((step) => {
          return <MultiStepStyledStep key={step} active={currentStep >= step} />
        })}
      </MultiStepStyledSteps>
    </MultiStepStyled>
  )
}

MultiStep.displayName = 'MultiStep'
