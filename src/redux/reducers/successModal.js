import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  name: 'successModal',
  initialState: {
    open: false
  },
  reducers: {
    openSuccessModal(state) {
      state.open = true
    },
    closeSuccessModal(state) {
      state.open = false
    }
  }
})

export const { openSuccessModal, closeSuccessModal } = slice.actions
export default slice.reducer
