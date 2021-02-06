import styled from 'styled-components'
import { FormInput } from '../Input/InputStyles'

export const FormTextarea = styled(FormInput)`
  width: 100%;
  height: ${({ ElementHeight }) => ElementHeight || '16rem'};
  transition: border 0.1s;
  resize: none;
`
