import React, { useEffect, useState } from 'react'
import { Close } from '@mui/icons-material'
import cn from 'classnames'

import { CardPage } from 'shared/cardPage'
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from 'processes/hooks'
import { getUserRoles } from 'processes/store/select'
import { Button, CardInfo, Input } from 'shared'

import styles from './styles.module.scss'

const AdminPage = (): JSX.Element => {
  const navigate = useNavigate()

  const token = localStorage.getItem('accessToken')
  const userRoles = useAppSelector(getUserRoles)

  const [search, setSearch] = useState('')
  const [ban, setBan] = useState(false)
  const [usersList, setUsersList] = useState(false)
  const [userInfoButton, setUserInfoButton] = useState(false)
  const [userInfo, setUserInfo] = useState(false)

  useEffect(() => {
    if (!token && !userRoles.includes('admin')) {
      navigate('/')
    }
  }, [])

  return (
    <CardPage className={styles.wrapperMainAdmin}>
      <CardInfo className={styles.wrapperAdmin}>
        <CardInfo className={styles.wrapperListMenu}>
          <div>
            <h2>Админ меню</h2>
            <Button
              onClick={() => {
                setUsersList(true)
                setUserInfo(false)
              }}
            >
              Пользователи
            </Button>
            <h3>Пользователи</h3>
            {userInfoButton && (
              <Button className={styles.wrapperBtnUsers} color={'green'}>
                <p
                  onClick={() => {
                    setUserInfo(true)
                    setUsersList(false)
                  }}
                >
                  Сосиска
                </p>
                <Close
                  onClick={() => {
                    setUserInfoButton(false)
                    setUserInfo(false)
                  }}
                />
              </Button>
            )}
          </div>
          <Button color={'purple'} onClick={() => navigate('/profile')}>
            Выйти
          </Button>
        </CardInfo>
        {usersList && (
          <CardInfo className={styles.wrapperListUser} background={'dark-middle'}>
            <h2>Список пользователей</h2>
            <Input value={search} setValue={setSearch} label={'Поиск'} />
            <ul>
              <li>
                <span>Почта: sosiska@gmail.com</span>
                <div>
                  <button
                    className={cn(styles.buttonWrap, styles.infoBtn)}
                    onClick={() => {
                      setUserInfoButton(true)
                      setUserInfo(true)
                      setUsersList(false)
                    }}
                  >
                    Подробнее
                  </button>
                  <button
                    className={cn(styles.buttonWrap, styles.banBtn)}
                    onClick={() => setBan(!ban)}
                  >
                    {ban ? 'Разбанить' : 'Забанить'}
                  </button>
                  <button className={styles.buttonWrap}>Удалить</button>
                </div>
              </li>
            </ul>
          </CardInfo>
        )}
        {userInfo && (
          <CardInfo className={styles.wrapperUserInfo} background={'dark-middle'}>
            <section className={styles.infoSection}>
              <CardInfo>3д моделька</CardInfo>
              <CardInfo>
                <h3>Основная информация</h3>
                <section>
                  <span>Почта: sosiska@gmail.com</span>
                  <span>Никнейм: sosiska</span>
                  <div>
                    <h4>Роли:</h4>
                    <span>Юзер</span>
                    <span>Админ</span>
                    <span>Чмо</span>
                  </div>
                </section>
                <section>
                  <button
                    className={cn(styles.buttonWrap, styles.banBtn)}
                    onClick={() => setBan(!ban)}
                  >
                    {ban ? 'Разбанить' : 'Забанить'}
                  </button>
                  <button className={styles.buttonWrap}>Удалить</button>
                </section>
              </CardInfo>
            </section>
            <CardInfo>
              <h3>Статистика</h3>
            </CardInfo>
            <CardInfo>
              <h3>Инвентарь</h3>
            </CardInfo>
            <CardInfo>
              <h3>Запросы</h3>
            </CardInfo>
          </CardInfo>
        )}
      </CardInfo>
    </CardPage>
  )
}

export default AdminPage
