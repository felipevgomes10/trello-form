import React from 'react'
import { item } from '../../../animations/appear'
import { FormButton } from './ButtonStyles'
import PropTypes from 'prop-types'

const Button = props => {
  return (
    <FormButton
      type="submit"
      variants={item}
      whileHover={{ scale: 1.02 }}
      disabled={props.disabled}
    >
      Enviar
    </FormButton>
  )
}

export default Button

Button.propTypes = {
  disabled: PropTypes.bool
}
