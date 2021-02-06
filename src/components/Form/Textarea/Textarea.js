import React from 'react'
import { InputWrapper, Label } from '../commonStyles'
import { FormTextarea } from './TextareaStyles'
import PropTypes from 'prop-types'
import { item } from '../../../animations/appear'
import ErrorText from '../Helpers/Error/ErrorText'

const Textarea = ({ id, label, placeholder, error, ...props }) => {
  return (
    <InputWrapper style={{ height: '100%' }} variants={item}>
      <Label htmlFor={id}>{label}</Label>
      <FormTextarea
        as="textarea"
        id={id}
        name={id}
        placeholder={placeholder}
        {...props}
      />
      {error && <ErrorText text={error} />}
    </InputWrapper>
  )
}

export default Textarea

Textarea.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  error: PropTypes.string,
  placeholder: PropTypes.string
}
