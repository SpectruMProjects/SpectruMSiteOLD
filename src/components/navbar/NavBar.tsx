import {
  Home,
  SupervisedUserCircle as Auth,
  Launch,
  VerifiedUser as Profile,
  ShoppingCart,
} from "@mui/icons-material";
import { useLocation } from "react-router-dom";

import { CardNavBar } from "./components";

export function NavBar(): JSX.Element {
  const { pathname } = useLocation();
  return (
    <div className='bg-base text-text flex flex-col place-items-center h-screen w-52 space-y-0 rounded-r-[28px]'>
      <h1 className='py-14 text-lg font-bold'>SpectruMine</h1>
      <CardNavBar
        text={"Главная"}
        to={"/"}
        icon={<Home />}
        selected={pathname === "/"}
      />
      <CardNavBar
        text={"Лаунчер"}
        to={"/launcher"}
        icon={<Launch />}
        selected={pathname === "/launcher"}
      />
      <CardNavBar
        text={"Пропуск"}
        to={"/pass"}
        icon={<ShoppingCart />}
        selected={pathname === "/pass"}
      />
      <CardNavBar
        text={"Профиль"}
        to={"/profile"}
        icon={<Profile />}
        selected={pathname === "/profile"}
      />
      <CardNavBar
        text={"Авторизация"}
        to={"/auth"}
        icon={<Auth />}
        selected={pathname === "/auth"}
      />
    </div>
  );
}
