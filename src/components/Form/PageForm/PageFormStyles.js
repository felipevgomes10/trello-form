import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Form = styled(motion.form)`
  display: flex;
  background: ${props => props.theme.colors.background};
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
  border-radius: 3px;
  width: 800px;
  padding: 3.2rem;

  @media (max-width: 850px) {
    flex-direction: column;
    width: 400px;
    box-shadow: none;
    padding: 0;
  }

  @media (max-width: 470px) {
    width: 300px;
  }

  @media (max-width: 360px) {
    width: 250px;
  }

  & > div {
    flex-basis: 50%;
    height: 100%;

    @media (max-width: 850px) {
      flex-basis: 100%;
    }
  }

  & > div:first-child {
    margin-right: 3.2rem;

    @media (max-width: 850px) {
      margin: 0;
    }
  }
`
