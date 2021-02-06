import React from 'react'
import { FormInput } from './InputStyles'
import { InputWrapper, Label } from '../commonStyles'
import PropTypes from 'prop-types'
import { item } from '../../../animations/appear'

const Input = ({ id, label, type, placeholder, ...props }) => {
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
    </InputWrapper>
  )
}

export default Input

Input.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string
}
