import {
  configureStore,
  getDefaultMiddleware,
  combineReducers
} from '@reduxjs/toolkit'
import card from './reducers/card'
import successModal from './reducers/successModal'

const middlaware = [...getDefaultMiddleware()]
const reducer = combineReducers({ card, successModal })

const store = configureStore({ reducer, middlaware })

export default store
