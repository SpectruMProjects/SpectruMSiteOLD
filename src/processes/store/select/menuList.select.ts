import { RootState } from 'processes/store'

export const getMenuList = (state: RootState) => state.menuList.menuList
