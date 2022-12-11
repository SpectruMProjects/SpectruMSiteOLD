import {
  Home,
  SupervisedUserCircle as Auth,
  Launch,
  VerifiedUser as Profile,
  ShoppingCart,
} from "@mui/icons-material";
import { useLocation } from "react-router-dom";

import { CardNavBar } from "./components";

/**
 * В качестве ключа используется текст опции в меню, пожэтому он должен быть уникальным
 */

export function NavBar(): JSX.Element {
  // const location = useLocation();
  // console.log(location);
  return (
    <div className='bg-base text-text flex flex-col place-items-center h-screen w-52 space-y-2 rounded-r-[28px]'>
      <h1 className='py-14 text-lg font-bold'>SpectruMine</h1>
      <CardNavBar text={"Главная"} to={"/"} icon={<Home />} selected={false} />
      <CardNavBar
        text={"Лаунчер"}
        to={"/launcher"}
        icon={<Launch />}
        selected={false}
      />
      <CardNavBar
        text={"Пропуск"}
        to={"/pass"}
        icon={<ShoppingCart />}
        selected={false}
      />
      <CardNavBar
        text={"Профиль"}
        to={"/profile"}
        icon={<Profile />}
        selected={false}
      />
      <CardNavBar
        text={"Авторизация"}
        to={"/auth"}
        icon={<Auth />}
        selected={false}
      />
    </div>
  );
}
