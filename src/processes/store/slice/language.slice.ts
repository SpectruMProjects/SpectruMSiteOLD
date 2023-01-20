import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit'

import { languageType, textType } from 'processes/types'
import { UK, RU, EN, BE } from 'app/assets/language'

export interface LanguageState {
  language: languageType
  languageText: textType
}

function languageDefault(): languageType {
  const languageSystem = navigator.language.split('').slice(0, 2).join('')

  if (languageSystem === 'ru') return 'ru'
  if (languageSystem === 'be') return 'be'
  if (languageSystem === 'uk') return 'uk'

  return 'en'
}

function languageFormat(lang: languageType): textType {
  if (lang === 'ru') return RU
  if (lang === 'be') return BE
  if (lang === 'uk') return UK

  return EN
}

const initialState: LanguageState = {
  language: languageDefault(),
  languageText: languageFormat(languageDefault()),
}

export const languageSlice = createSlice({
  name: '@@language',
  initialState,
  reducers: {
    actionChangeLanguage: (state: Draft<LanguageState>, action: PayloadAction<languageType>) => {
      state.language = action.payload
      state.languageText = languageFormat(action.payload)
    },
  },
})

export const languageReducer = languageSlice.reducer

export const { actionChangeLanguage } = languageSlice.actions
