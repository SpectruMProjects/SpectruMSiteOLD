import { RootState } from "../store";

export const getMenuList = (state: RootState) => state.menuList.menuList;
