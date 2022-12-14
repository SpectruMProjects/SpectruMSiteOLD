import { createSlice } from "@reduxjs/toolkit";
import {
  Home,
  SupervisedUserCircle as Auth,
  Launch,
  VerifiedUser as Profile,
  ShoppingCart,
  SvgIconComponent,
} from "@mui/icons-material";

interface MenuListState {
  menuList: {
    text: string;
    to: string;
    icon: SvgIconComponent;
  }[];
}

const initialState: MenuListState = {
  menuList: [
    {
      text: "Главная",
      to: "/",
      icon: Home,
    },
    {
      text: "Лаунчер",
      to: "/launcher",
      icon: Launch,
    },
    {
      text: "Пропуск",
      to: "/pass",
      icon: ShoppingCart,
    },
    {
      text: "Профиль",
      to: "/profile",
      icon: Profile,
    },
    {
      text: "Авторизация",
      to: "/auth",
      icon: Auth,
    },
  ],
};

export const menuListSlice = createSlice({
  name: "@@menuList",
  initialState,
  reducers: {},
});

export const menuListReducer = menuListSlice.reducer;
