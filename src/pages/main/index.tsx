import React, { useEffect } from 'react'
import { Telegram, HeadsetMic } from '@mui/icons-material'
import { useLocation, useNavigate, useOutlet } from 'react-router-dom'
import { CSSTransition, SwitchTransition } from 'react-transition-group'

import { NavBar } from 'widgets/navbar'
import { useAppSelector } from 'processes/hooks'
import { getTheme } from 'processes/store/select'
import { Notification } from 'widgets/notification'
import { logo } from 'app/assets/webp'
import { DiscordIcon } from 'app/assets/svg'

import styles from './Main.module.scss'

const MainPage = (): JSX.Element => {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const currentOutlet = useOutlet()

  const theme: boolean = useAppSelector(getTheme)
  const token = localStorage.getItem('accessToken')

  //keeps track of the theme of the system
  useEffect(() => {
    document.body.dataset.theme = theme ? 'dark' : 'light'
  }, [theme])

  useEffect(() => {
    if (token === null) {
      if (pathname === '/profile') navigate('/auth')
    } else {
      if (pathname === '/auth') navigate('/profile')
    }
  }, [token])

  return (
    <>
      <div className={styles.mainWrapper}>
        <Notification />
        <NavBar />
        <SwitchTransition>
          <CSSTransition key={pathname} timeout={300} classNames='page' unmountOnExit>
            <section className='page'>
              {currentOutlet}
              <footer className={styles.footerWrapper}>
                <div className={styles.topWrapFooter}>
                  <div className={styles.titleFooter}>
                    <img src={logo} alt={'logo'} />
                    <h2>SpectrumMine</h2>
                  </div>
                  <div className={styles.linksIcon}>
                    <a
                      href={'/'}
                      onClick={(e) => {
                        e.preventDefault()
                      }}
                    >
                      <DiscordIcon />
                    </a>
                    <a
                      href={'/'}
                      onClick={(e) => {
                        e.preventDefault()
                      }}
                    >
                      <Telegram />
                    </a>
                    <a
                      href={'/'}
                      onClick={(e) => {
                        e.preventDefault()
                      }}
                    >
                      <HeadsetMic />
                    </a>
                  </div>
                </div>
                <div className={styles.topWrapFooter}>
                  <p>Все права защищены.</p>
                  <div className={styles.linksInfo}>
                    <a
                      href={'/'}
                      onClick={(e) => {
                        e.preventDefault()
                      }}
                    >
                      Контакты
                    </a>
                    <a
                      href={'/'}
                      onClick={(e) => {
                        e.preventDefault()
                      }}
                    >
                      Способы оплаты
                    </a>
                    <a
                      href={'/'}
                      onClick={(e) => {
                        e.preventDefault()
                      }}
                    >
                      Пользовательское соглашение
                    </a>
                  </div>
                </div>
              </footer>
            </section>
          </CSSTransition>
        </SwitchTransition>
      </div>
    </>
  )
}

export default MainPage
