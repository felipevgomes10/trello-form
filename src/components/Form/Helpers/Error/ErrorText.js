import React from 'react'
import PropTypes from 'prop-types'
import { ErrorMessage } from './ErrorTextStyles'

const ErrorText = ({ text }) => {
  return <ErrorMessage>{text}</ErrorMessage>
}

export default ErrorText

ErrorText.propTypes = {
  text: PropTypes.string
}
