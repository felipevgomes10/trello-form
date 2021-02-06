import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Form = styled(motion.form)`
  display: flex;
  background: ${props => props.theme.colors.background};
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
  border-radius: 3px;
  width: 800px;
  padding: 3.2rem;

  & > div {
    flex-basis: 50%;
    height: 100%;
  }

  & > div:first-child {
    margin-right: 3.2rem;
  }
`
