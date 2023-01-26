import React, { useState } from 'react'
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

import { actionChangeTheme, actionChangeLanguage } from 'processes/store/slice'
import { IMenu } from 'processes/interface'
import { useAppDispatch, useAppSelector, useWindowSize } from 'processes/hooks'
import { getLanguage, getLanguageSystem, getMenuList, getTheme } from 'processes/store/select'
import { CardNavBar, InputTheme } from 'features'
import { CardNav, CircleMenuMove } from 'entities/navbar'
import { logo } from 'app/assets/webp'

import NavBarProps from './NavBar.props'
import styles from './NavBar.module.scss'

export function NavBar({ className, ...props }: NavBarProps): JSX.Element {
  const { pathname } = useLocation()
  const dispatch = useAppDispatch()
  const [windowX] = useWindowSize()

  const [menuSmall, setMenuSmall] = useState(false)

  const handleIconReturn = (val: string): React.ReactNode => {
    if (val === 'home') return <Home />
    if (val === 'auth') return <Auth />
    if (val === 'profile') return <Profile />
    if (val === 'hardcore') return <HeartBroken />
  }

  const token: string | null = localStorage.getItem('accessToken')
  const menuList = useAppSelector(getMenuList)
  const theme = useAppSelector(getTheme)
  const { menu } = useAppSelector(getLanguage)
  const languageSystem = useAppSelector(getLanguageSystem)

  const [activeMenu, setActiveMenu] = useState<boolean>(false)
  const [top, setTop] = useState<number>(0)

  const menuOff: boolean = menuList.find((menu) => menu.to === pathname) === undefined

  const handleChangeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang = e.target.value
    if (lang === 'ru' || lang === 'en' || lang === 'be' || lang === 'uk')
      dispatch(actionChangeLanguage(lang))
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

  return windowX > 1100 ? (
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
        .map(({ icon, to }, index) => {
          const text = menu[icon]
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
      <CardNav
        icon={theme ? <Dark /> : <Light />}
        activeMenu={activeMenu}
        onClick={handleChangeTheme}
      >
        {menu.theme}
        <InputTheme theme={theme} />
      </CardNav>
      <CardNav icon={<Language />} activeMenu={activeMenu}>
        <select
          className={styles.checkBox}
          defaultValue={languageSystem}
          onChange={handleChangeLanguage}
        >
          <option value={'en'}>English</option>
          <option value={'uk'}>Український</option>
          <option value={'ru'}>Русский</option>
          <option value={'be'}>Беларускі</option>
        </select>
      </CardNav>
    </section>
  ) : (
    <section
      className={cn(className, styles.wrapperNavBarSmall, {
        [styles.wrapperNavBarSmallActive]: !menuSmall,
      })}
      onMouseLeave={() => setMenuSmall(false)}
    >
      <span
        className={cn(styles.background, {
          [styles.backgroundActive]: !menuSmall,
        })}
      ></span>
      <section
        className={cn(styles.menuLines, {
          [styles.menuLinesActive]: menuSmall,
        })}
        onClick={() => setMenuSmall(!menuSmall)}
      >
        <div>
          <span></span>
        </div>
      </section>
      <section
        className={cn(styles.wrapperNavMenu, {
          [styles.wrapperNavMenuActive]: !menuSmall,
        })}
      >
        <span className={styles.titleWrapper}>
          <img src={logo} alt={logo} />
          <h1
            className={cn(styles.titleNavBar, {
              [styles.titleNavBarOn]: true,
            })}
          >
            SpectruMine
          </h1>
        </span>
        {menuList
          .filter((menu) => filterMenuList(menu))
          .map(({ icon, to }, index) => {
            const text = menu[icon]
            return (
              <CardNavBar
                key={index}
                text={text}
                to={to}
                index={index}
                icon={handleIconReturn(icon)}
                selected={pathname === to}
                activeMenu={true}
                setTop={setTop}
                setMenu={setMenuSmall}
              />
            )
          })}
        <CardNav icon={theme ? <Dark /> : <Light />} activeMenu={true} onClick={handleChangeTheme}>
          {menu.theme}
          <InputTheme theme={theme} />
        </CardNav>
        <CardNav icon={<Language />} activeMenu={true}>
          <select
            className={styles.checkBox}
            defaultValue={languageSystem}
            onChange={handleChangeLanguage}
          >
            <option value={'en'}>English</option>
            <option value={'uk'}>Український</option>
            <option value={'ru'}>Русский</option>
            <option value={'be'}>Беларускі</option>
          </select>
        </CardNav>
      </section>
    </section>
  )
}
