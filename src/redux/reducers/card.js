import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  name: 'card',
  initialState: {
    loading: false,
    data: null,
    error: null
  },
  reducers: {
    fetchStarted(state) {
      state.loading = true
    },
    fetchSuccess(state, action) {
      state.loading = false
      state.data = action.payload
      state.error = null
    },
    fetchError(state, action) {
      state.loading = false
      state.data = null
      state.error = action.payload
    }
  }
})

export const { fetchStarted, fetchSuccess, fetchError } = slice.actions

export const createCard = payload => async dispatch => {
  try {
    dispatch(fetchStarted())

    const response = await fetch(payload, { method: 'POST' })
    if (!response.ok) throw new Error('Algo deu errado, tente novamente')

    const data = await response.json()
    return dispatch(fetchSuccess(data))
  } catch (error) {
    return dispatch(fetchError(error.message))
  }
}

export default slice.reducer
