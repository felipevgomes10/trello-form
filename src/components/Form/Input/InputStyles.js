import styled from 'styled-components'

export const FormInput = styled.input`
  width: 36rem;
  height: 4rem;
  padding: 1.6rem;
  outline: none;
  color: ${props => props.theme.colors.primary};
  background: ${props => props.theme.colors.primaryLight};
  border: 2px solid ${props => props.theme.colors.font};
  border-radius: 5px;
  transition: 0.1s;

  @media (max-width: 850px) {
    width: 100%;
  }

  &:focus {
    border: 2px solid ${props => props.theme.colors.primary};
  }
`
