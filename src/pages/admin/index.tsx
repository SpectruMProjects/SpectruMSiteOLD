import React, { useEffect, useState } from 'react'
import { Close, Add } from '@mui/icons-material'
import cn from 'classnames'

import { CardPage } from 'shared/cardPage'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from 'processes/hooks'
import { getTheme, getUserRoles } from 'processes/store/select'
import { actionChangeTheme } from 'processes/store/slice'
import { Button, CardInfo, Input } from 'shared'
import { InputTheme } from 'features/inputTheme'

import styles from './styles.module.scss'

const AdminPage = (): JSX.Element => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const token = localStorage.getItem('accessToken')
  const userRoles = useAppSelector(getUserRoles)

  const [search, setSearch] = useState('')
  const [ban, setBan] = useState(false)
  const [usersList, setUsersList] = useState(false)
  const [userInfoButton, setUserInfoButton] = useState(false)
  const [userInfo, setUserInfo] = useState(false)

  const [banModal, setBanModal] = useState(false)
  const [removeModal, setRemoveModal] = useState(false)
  const [changeModal, setChangeModal] = useState(false)

  const theme = useAppSelector(getTheme)

  const handleAddRoles = () => {
    //!
  }

  const handleOpenModalRemove = () => {
    setRemoveModal(true)
  }

  const handleRemoveUser = (val: boolean): void => {
    console.log(val)
    setRemoveModal(false)
  }

  const handleBanUser = (val: boolean): void => {
    if (val) setBan(!ban)
    setBanModal(false)
  }

  const handleChangeUser = (val: boolean) => {
    console.log(val)
    setChangeModal(false)
  }

  const handleOpenModalBan = () => {
    setBanModal(true)
  }

  const handleOpenModalChange = () => {
    setChangeModal(true)
  }

  const handleChangeTheme = (): void => {
    dispatch(actionChangeTheme(!theme))
  }

  useEffect(() => {
    if (!token && !userRoles.includes('admin')) {
      navigate('/')
    }
  }, [])

  useEffect(() => {
    document.body.dataset.theme = theme ? 'dark' : 'light'
  }, [theme])

  return (
    <CardPage className={styles.wrapperMainAdmin}>
      <CardInfo className={styles.wrapperAdmin}>
        <CardInfo
          className={cn(styles.modalWrapperBan, {
            [styles.modalWrapperBanOn]: banModal,
          })}
          background={'opacity'}
        >
          <CardInfo background={'blue'}>
            <p>Вы уверены что хотите {ban ? 'разбанить' : 'забанить'} пользователя?</p>
            <div>
              <button onClick={() => handleBanUser(false)}>Нет</button>
              <button onClick={() => handleBanUser(true)}>Да</button>
            </div>
          </CardInfo>
        </CardInfo>
        <CardInfo
          className={cn(styles.modalWrapperBan, {
            [styles.modalWrapperBanOn]: removeModal,
          })}
          background={'opacity'}
        >
          <CardInfo background={'blue'}>
            <p>Вы уверены что хотите удалить пользователя?</p>
            <div>
              <button onClick={() => handleRemoveUser(false)}>Нет</button>
              <button onClick={() => handleRemoveUser(true)}>Да</button>
            </div>
          </CardInfo>
        </CardInfo>
        <CardInfo
          className={cn(styles.modalWrapperBan, {
            [styles.modalWrapperBanOn]: changeModal,
          })}
          background={'opacity'}
        >
          <CardInfo background={'blue'}>
            <p>Изменение данных пользователя</p>
            <Input
              color={'static-light'}
              label={'Почта'}
              value={''}
              setValue={() => {
                /**/
              }}
            />
            <Input
              color={'static-light'}
              label={'Никнейм'}
              value={''}
              setValue={() => {
                /**/
              }}
            />
            <div>
              <button onClick={() => handleChangeUser(false)}>Закрыть</button>
              <button onClick={() => handleChangeUser(true)}>Изменить</button>
            </div>
          </CardInfo>
        </CardInfo>
        <CardInfo className={styles.wrapperListMenu}>
          <div>
            <h2>Админ меню</h2>
            <Button onClick={handleChangeTheme} color={'purple'}>
              Тема
              <InputTheme theme={theme} />
            </Button>
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
                    onClick={handleOpenModalBan}
                  >
                    {ban ? 'Разбанить' : 'Забанить'}
                  </button>
                  <button onClick={handleOpenModalRemove} className={styles.buttonWrap}>
                    Удалить
                  </button>
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
                  <button
                    onClick={handleOpenModalChange}
                    className={cn(styles.buttonWrap, styles.changeBtn)}
                  >
                    Изменить
                  </button>
                  <div>
                    <h4>Роли:</h4>
                    <span>Юзер</span>
                    <span>Админ</span>
                    <span>Чмо</span>
                    <button onClick={handleAddRoles}>
                      <Add />
                    </button>
                  </div>
                </section>
                <section>
                  <button
                    className={cn(styles.buttonWrap, styles.banBtn)}
                    onClick={handleOpenModalBan}
                  >
                    {ban ? 'Разбанить' : 'Забанить'}
                  </button>
                  <button onClick={handleOpenModalRemove} className={styles.buttonWrap}>
                    Удалить
                  </button>
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
