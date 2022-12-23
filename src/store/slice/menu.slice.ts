import { createSlice } from '@reduxjs/toolkit'

import { IMenu } from 'utils/interface'

interface MenuListState {
  menuList: IMenu[]
}

const initialState: MenuListState = {
  menuList: [
    {
      text: 'Главная',
      to: '/',
      icon: 'home',
    },
    {
      text: 'Хардкор',
      to: '/hardcore',
      icon: 'heart',
    },
    // {
    //   text: "Лаунчер",
    //   to: "/launcher",
    //   icon: "launch",
    // },
    // {
    //   text: "Пропуск",
    //   to: "/pass",
    //   icon: "shop",
    // },
    {
      text: 'Профиль',
      to: '/profile',
      icon: 'profile',
    },
    {
      text: 'Авторизация',
      to: '/auth',
      icon: 'auth',
    },
  ],
}

export const menuListSlice = createSlice({
  name: '@@menuList',
  initialState,
  reducers: {},
})

export const menuListReducer = menuListSlice.reducer
