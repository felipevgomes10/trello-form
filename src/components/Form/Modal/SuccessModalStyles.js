import styled, { keyframes } from 'styled-components'

const slideDown = keyframes`
to {
  opacity: 1;
  transform: initial;
}
`

export const Blur = styled.div`
  display: grid;
  place-items: center;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  background: rgba(0, 0, 0, 0.35);
`

export const ModalWrapper = styled.div`
  display: grid;
  place-items: center;
  gap: 2rem;
  width: 30rem;
  height: 20rem;
  border-radius: 5px;
  background: #ffffff;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.35);
  opacity: 0;
  transform: translateY(-50px);
  position: relative;
  animation: ${slideDown} 0.5s forwards;

  svg {
    width: 8rem;
    height: 8rem;
    align-self: end;
  }

  span {
    font-size: 1.6rem;
    align-self: start;
  }
`

export const CloseButton = styled.button`
  width: 4rem;
  height: 4rem;
  font-size: 2.5rem;
  font-weight: bold;
  outline: none;
  border: 3px solid ${props => props.theme.colors.font};
  border-radius: 50%;
  color: ${props => props.theme.colors.font};
  background: #ffffff;
  position: absolute;
  top: -1rem;
  right: -1rem;
  cursor: pointer;
`
