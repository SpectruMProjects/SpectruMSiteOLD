import React, { useEffect } from 'react'
import { useLocation, useNavigate, useOutlet } from 'react-router-dom'
import { CSSTransition, SwitchTransition } from 'react-transition-group'

import { NavBar } from 'widgets/navbar'
import { useAppSelector } from 'processes/hooks'
import { getTheme } from 'processes/store/select'
import { Notification } from 'widgets/notification'
import { Footer } from 'widgets/footer'

import styles from './styles.module.scss'

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
    if (!token) {
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
              <Footer />
            </section>
          </CSSTransition>
        </SwitchTransition>
      </div>
    </>
  )
}

export default MainPage
