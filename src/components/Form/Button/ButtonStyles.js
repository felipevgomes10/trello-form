import styled from 'styled-components'
import { motion } from 'framer-motion'

export const FormButton = styled(motion.button)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4.3rem;
  width: 100%;
  background: ${props => props.theme.colors.primary};
  color: #ffffff;
  padding: 1.6rem;
  border: none;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  transition: 0.3s;

  &[disabled] {
    background: ${props => props.theme.colors.primaryLight2};
    cursor: wait;
    transform: initial !important;
  }
`
