import React from 'react'
import { FormInput } from './InputStyles'
import { InputWrapper, Label } from '../commonStyles'
import PropTypes from 'prop-types'
import { item } from '../../../animations/appear'
import ErrorText from '../Helpers/Error/ErrorText'

const Input = ({ id, label, type, placeholder, error, ...props }) => {
  return (
    <InputWrapper variants={item}>
      <Label htmlFor={id}>{label}</Label>
      <FormInput
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        {...props}
      />
      {error && <ErrorText text={error} />}
    </InputWrapper>
  )
}

export default Input

Input.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  error: PropTypes.string
}
