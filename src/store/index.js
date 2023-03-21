import React from 'react'
import { configureStore } from '@reduxjs/toolkit'
import authSlice from './authSlice'
import cartSlice from './cartSlice'

const stre = configureStore({
  reducer: {
    auth: authSlice.reducer,
    cart: cartSlice.reducer
  },
})

export default store