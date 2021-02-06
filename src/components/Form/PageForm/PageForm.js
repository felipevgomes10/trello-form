import React from 'react'
import { Form } from './PageFormStyles'
import PropTypes from 'prop-types'
import { wrapper } from '../../../animations/appear'

const PageForm = ({ onSubmit, children }) => {
  return (
    <Form
      initial="hidden"
      animate="visible"
      variants={wrapper}
      onSubmit={onSubmit}
    >
      {children}
    </Form>
  )
}

export default PageForm

PageForm.propTypes = {
  children: PropTypes.any,
  onSubmit: PropTypes.func
}
