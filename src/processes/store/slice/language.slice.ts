import { createSlice } from '@reduxjs/toolkit'

import { languageType, textType } from 'processes/types'

interface LanguageState {
  language: languageType
  languageText: textType | null
}

function languageDefault(): languageType {
  const languageSystem = navigator.language.split('').slice(0, 2).join('')

  if (languageSystem === 'ru') return 'ru'
  if (languageSystem === 'en') return 'en'
  if (languageSystem === 'be') return 'be'
  if (languageSystem === 'uk') return 'uk'

  return 'en'
}

const initialState: LanguageState = {
  language: languageDefault(),
  languageText: null,
}

export const languageSlice = createSlice({
  name: '@@language',
  initialState,
  reducers: {},
})

export const languageReducer = languageSlice.reducer
