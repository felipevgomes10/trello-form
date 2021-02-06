import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../styles/GlobalStyles'
import { theme } from '../themes/primary'
import { Provider } from 'react-redux'
import store from '../redux/configureStore'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    </>
  )
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object
}
