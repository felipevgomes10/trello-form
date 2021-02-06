import styled from 'styled-components'
import { motion } from 'framer-motion'

export const InputWrapper = styled(motion.div)`
  margin-bottom: 1.6rem;
`

export const Label = styled.label`
  display: block;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 1.6rem;
  font-size: 1.6rem;
  font-weight: bold;
`
