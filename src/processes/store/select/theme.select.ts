import { RootState } from 'processes/store'

export const getTheme = (state: RootState) => state.theme.theme
