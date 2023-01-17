import React, { SelectHTMLAttributes, useState } from 'react'
import { useLocation } from 'react-router-dom'
import {
  NightsStay as Dark,
  LightMode as Light,
  Home,
  SupervisedUserCircle as Auth,
  VerifiedUser as Profile,
  HeartBroken,
  Language,
} from '@mui/icons-material'
import cn from 'classnames'

import { actionChangeTheme } from 'processes/store/slice'
import { IMenu } from 'processes/interface'
import { useAppDispatch, useAppSelector } from 'processes/hooks'
import { getMenuList, getTheme } from 'processes/store/select'
import { CardNavBar, InputTheme } from 'features'
import { CardNav, CircleMenuMove } from 'entities/navbar'
import { logo } from 'app/assets/webp'

import NavBarProps from './NavBar.props'
import styles from './NavBar.module.scss'
import { actionChangeLanguage } from '../../processes/store/slice/language.slice'

export function NavBar({ className, ...props }: NavBarProps): JSX.Element {
  const { pathname } = useLocation()
  const dispatch = useAppDispatch()

  const language = navigator.language.split('').slice(0, 2).join('')

  const handleIconReturn = (val: string): React.ReactNode => {
    if (val === 'home') return <Home />
    if (val === 'auth') return <Auth />
    if (val === 'profile') return <Profile />
    if (val === 'heart') return <HeartBroken />
  }

  const token: string | null = localStorage.getItem('accessToken')
  const menuList = useAppSelector(getMenuList)
  const theme = useAppSelector(getTheme)

  const [activeMenu, setActiveMenu] = useState<boolean>(false)
  const [top, setTop] = useState<number>(0)

  const menuOff: boolean = menuList.find((menu) => menu.to === pathname) === undefined

  const handleChangeLanguage = (e: any) => {
    dispatch(actionChangeLanguage(e.target.value))
  }

  const handleChangeTheme = (): void => {
    dispatch(actionChangeTheme(!theme))
  }

  const filterMenuList = (menu: IMenu): boolean => {
    if (token === null) {
      return menu.to !== '/profile'
    } else {
      return menu.to !== '/auth'
    }
  }

  return (
    <section
      className={cn(className, styles.wrapperNavBar, {
        [styles.wrapperNavBarOn]: activeMenu,
      })}
      onMouseEnter={() => setActiveMenu(true)}
      onMouseLeave={() => setActiveMenu(false)}
      {...props}
    >
      <span className={styles.titleWrapper}>
        <img src={logo} alt={logo} />
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
        .map(({ icon, text, to }, index) => (
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
        ))}
      <CardNav
        icon={theme ? <Dark /> : <Light />}
        activeMenu={activeMenu}
        onClick={handleChangeTheme}
      >
        Тема
        <InputTheme theme={theme} />
      </CardNav>
      <CardNav icon={<Language />} activeMenu={activeMenu}>
        <select className={styles.checkBox} defaultValue={language} onChange={handleChangeLanguage}>
          <option value={'en'}>English</option>
          <option value={'uk'}>Український</option>
          <option value={'ru'}>Русский</option>
          <option value={'be'}>Беларускі</option>
        </select>
      </CardNav>
    </section>
  )
}
