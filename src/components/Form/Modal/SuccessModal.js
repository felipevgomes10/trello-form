import React, { useCallback } from 'react'
import { Blur, CloseButton, ModalWrapper } from './SuccessModalStyles'
import CheckIcon from '../../../../public/check.svg'
import { useDispatch } from 'react-redux'
import { closeSuccessModal } from '../../../redux/reducers/successModal'

const SuccessModal = () => {
  const dispatch = useDispatch()

  const handleOutsideClick = useCallback(
    e => {
      if (e.target === e.currentTarget) dispatch(closeSuccessModal())
    },
    [dispatch]
  )

  const closeModal = useCallback(() => {
    dispatch(closeSuccessModal())
  }, [dispatch])

  return (
    <Blur onClick={handleOutsideClick}>
      <ModalWrapper>
        <CloseButton onClick={closeModal}>X</CloseButton>
        <CheckIcon />
        <span>Card criado com sucesso!</span>
      </ModalWrapper>
    </Blur>
  )
}

export default SuccessModal
