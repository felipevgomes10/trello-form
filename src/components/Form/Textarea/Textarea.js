import React from 'react'
import { InputWrapper, Label } from '../commonStyles'
import { FormTextarea } from './TextareaStyles'
import PropTypes from 'prop-types'
import { item } from '../../../animations/appear'
import ErrorText from '../Helpers/Error/ErrorText'

const Textarea = ({
  id,
  label,
  placeholder,
  ElementHeight,
  error,
  ...props
}) => {
  return (
    <InputWrapper style={{ height: '100%' }} variants={item}>
      <Label htmlFor={id}>{label}</Label>
      <FormTextarea
        as="textarea"
        id={id}
        name={id}
        placeholder={placeholder}
        ElementHeight={ElementHeight}
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
  ElementHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  placeholder: PropTypes.string
}
