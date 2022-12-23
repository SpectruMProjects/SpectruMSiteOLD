import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import {
  Diversity1 as Logo,
  NightsStay as Dark,
  LightMode as Light,
  Home,
  SupervisedUserCircle as Auth,
  VerifiedUser as Profile,
  HeartBroken,
} from '@mui/icons-material'
import cn from 'classnames'

import { actionChangeTheme } from 'store/slice'
import { IMenu, IUser } from 'utils/interface'
import { useAppDispatch, useAppSelector } from 'utils/hooks'
import { getMenuList, getTheme, getUser } from 'store/select'

import { CardNavBar, CardNavTheme, CircleMenuMove } from './components'
import NavBarProps from './NavBar.props'
import styles from './NavBar.module.scss'

export function NavBar({ className, ...props }: NavBarProps): JSX.Element {
  const { pathname } = useLocation()
  const dispatch = useAppDispatch()

  const handleIconReturn = (val: string): React.ReactNode => {
    if (val === 'home') return <Home />
    if (val === 'auth') return <Auth />
    if (val === 'profile') return <Profile />
    if (val === 'heart') return <HeartBroken />
  }

  const user: IUser | undefined = useAppSelector(getUser)
  const menuList = useAppSelector(getMenuList)
  const theme: boolean = useAppSelector(getTheme)

  const [activeMenu, setActiveMenu] = useState<boolean>(false)
  const [top, setTop] = useState<number>(0)

  const menuOff: boolean = menuList.find((menu) => menu.to === pathname) === undefined

  const handleChangeTheme = (): void => {
    dispatch(actionChangeTheme(!theme))
  }

  const filterMenuList = (menu: IMenu): boolean => {
    if (user === undefined) {
      return menu.to !== '/profile'
    } else {
      return menu.to !== '/auth'
    }
  }

  return (
    <div
      className={cn(className, styles.wrapperNavBar, {
        [styles.wrapperNavBarOn]: activeMenu,
      })}
      onMouseEnter={() => setActiveMenu(true)}
      onMouseLeave={() => setActiveMenu(false)}
      {...props}
    >
      <span className={styles.titleWrapper}>
        <Logo />
        <h1
          className={cn(styles.titleNavBar, {
            [styles.titleNavBarOn]: activeMenu,
          })}
        >
          SpectruMine
        </h1>
      </span>
      <CircleMenuMove top={top} activeMenu={activeMenu} menuOff={menuOff} />
      {menuList
        .filter((menu) => filterMenuList(menu))
        .map(({ icon, text, to }, index) => {
          return (
            <CardNavBar
              key={index}
              text={text}
              to={to}
              index={index}
              icon={handleIconReturn(icon)}
              selected={pathname === to}
              activeMenu={activeMenu}
              setTop={setTop}
            />
          )
        })}
      <CardNavTheme
        icon={theme ? <Dark /> : <Light />}
        text={'Тема'}
        activeMenu={activeMenu}
        theme={theme}
        onClick={handleChangeTheme}
      />
    </div>
  )
}
