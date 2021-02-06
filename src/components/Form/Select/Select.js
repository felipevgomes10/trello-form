import React from 'react'
import { item } from '../../../animations/appear'
import { InputWrapper, Label } from '../commonStyles'
import { FormSelect } from './SelectStyles'
import PropTypes from 'prop-types'

const Select = ({ id, label, children, ...props }) => {
  return (
    <InputWrapper variants={item}>
      <Label htmlFor={id}>{label}</Label>
      <FormSelect as="select" id={id} name={id} {...props}>
        <option value="" disabled>
          Selecione um item
        </option>
        {children}
      </FormSelect>
    </InputWrapper>
  )
}

export default Select

Select.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  children: PropTypes.any
}
