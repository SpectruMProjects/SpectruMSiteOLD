import { RootState } from 'processes/store'

type page =
  | 'footer'
  | 'main'
  | 'menu'
  | 'profile'
  | 'auth'
  | 'error'
  | 'hardcore'
  | 'admin'
  | 'teamsuccess'
  | 'confirmation'

export const getLanguage = (state: RootState) => state.language.languageText
export const getLanguageSystem = (state: RootState) => state.language.language
