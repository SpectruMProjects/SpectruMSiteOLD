import React from 'react'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import { I18nextProvider } from 'react-i18next'

import AppRouter from './router'
import store, { persistor } from 'processes/store'
import i18next from './i18n'

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <I18nextProvider i18n={i18next}>
          <AppRouter />
        </I18nextProvider>
      </PersistGate>
    </Provider>
  )
}
