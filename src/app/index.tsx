import React from 'react'

import { Provider } from 'react-redux'

import AppRouter from './router'
import store from 'processes/store'

export default function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  )
}
