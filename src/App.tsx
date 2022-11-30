import NavBar, { NavBarOption } from "./components/navbar/NavBar";
import Home from '@material-ui/icons/Home'
import Auth from '@material-ui/icons/SupervisedUserCircle'
import Launch from '@material-ui/icons/Launch' 
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./home/HomePage";
import LauncherPage from "./launcher/LauncherPage";
import PassPage from "./pass/PassPage";
import { useEffect, useState } from "react";
import ProfilePage from "./profile/ProfilePage";
import Profile from '@material-ui/icons/VerifiedUser'
import { useUser } from "./profile/ProfileVM";
import AuthPage from "./profile/AuthPage";
import { ShoppingCart } from "@material-ui/icons";

export default function App() {
  const user = useUser()

  const router = createBrowserRouter([
    { path: '/', element: <HomePage/> },
    { path: '/launcher', element: <LauncherPage/> },
    { path: '/pass', element: <PassPage/> },
    { path: '/profile', element: <ProfilePage/> },
    { path: '/auth', element: <AuthPage/>}
  ])

  useEffect(() => {
    window.addEventListener('auth.register', () => {router.navigate('/profile')})
    window.addEventListener('auth.login', () => {router.navigate('/profile')})
    window.addEventListener('auth.needAuth', () => {router.navigate('/auth')})
  })

  const [currentLocation, setCurrentLocation] = useState(router.state.location.pathname) 
  router.subscribe(({location}) => {setCurrentLocation(location.pathname)})
  const navBarOptions = [
    { selected: currentLocation === '/', text: 'Главная', icon: <Home/>, to: '/' },
    { selected: currentLocation === '/launcher', text: 'Лаунчер', icon: <Launch/>, to: '/launcher' },
    { selected: currentLocation === '/pass', text: 'Пропуск', icon: <ShoppingCart/>, to: '/pass' },
    user 
    ? { selected: currentLocation === '/profile', text: 'Профиль', icon: <Profile/>, to: '/profile' } 
    : { selected: currentLocation === '/auth', text: 'Авторизация', icon: <Auth/>, to: '/auth'}
  ]
  const onNavBarSelect = ({to}: NavBarOption) => {
    if (to !== currentLocation)
      router.navigate(to)
  }
  
  return (
    <div className="bg-mantle flex flex-row text-text">
      <NavBar onSelect={onNavBarSelect} options={navBarOptions}/>
      <RouterProvider router={router}/>
    </div>
  )
}
