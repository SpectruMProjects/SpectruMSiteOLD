import { createSlice } from '@reduxjs/toolkit'

import { IMenu } from 'processes/interface'

interface MenuListState {
  menuList: IMenu[]
}

const initialState: MenuListState = {
  menuList: [
    {
      to: '/',
      icon: 'home',
    },
    {
      to: '/hardcore',
      icon: 'hardcore',
    },
    // {
    //   to: "/launcher",
    //   icon: "launch",
    // },
    // {
    //   to: "/pass",
    //   icon: "shop",
    // },
    {
      to: '/profile',
      icon: 'profile',
    },
    {
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
