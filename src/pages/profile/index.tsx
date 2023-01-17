import React, { useEffect, useState } from 'react'
import { ContentCopy } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import cn from 'classnames'

import { CardPage } from 'shared/cardPage'
import { useAppDispatch, useAppSelector, useExitAccount, useNotification } from 'processes/hooks'
import { fetchChangePassword, fetchConfirmationRoles, fetchGetUser } from 'processes/store/thunk'
import { getUser, getUserRoles } from 'processes/store/select'
import { Button, CardInfo, Input } from 'shared'

import styles from './Profile.module.scss'
import { HeartIcon } from '../../app/assets/svg'

const ProfilePage = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const notification = useNotification()
  const navigate = useNavigate()
  const exitAccount = useExitAccount()

  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState(false)
  const [navMenu, setNavMenu] = useState('setting')

  const user = useAppSelector(getUser)
  const userRoles = useAppSelector(getUserRoles)

  const handleCopy = (value: string): void => {
    navigator.clipboard.writeText(value).then(() => notification('copy', 5000))
  }

  const handleChangePassword = (value: string, setPasswordError: (val: boolean) => void): void => {
    if (
      password.trim().length === 0 ||
      password.trim().length < 8 ||
      password.match(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=\S+$).{8,}$/g) === null
    ) {
      setPasswordError(true)
      notification(
        'error',
        5000,
        {
          text: 'Пароль должен содержать не меньше 8 символом, а так же иметь хотя бы одну цыфру и одну большую букву',
        },
        passwordError,
      )
    } else {
      setPassword('')
      setPasswordError(false)
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      dispatch(fetchChangePassword({ mail: user!.mail, newPass: password }))
    }
  }
  const handleExit = () => {
    exitAccount()
    navigate('/auth')
  }

  useEffect(() => {
    dispatch(fetchGetUser())
    dispatch(fetchConfirmationRoles())
  }, [])

  return (
    <CardPage>
      <CardInfo className={styles.wrapperProfile}>
        <h2>Профиль {userRoles && userRoles.includes('admin') && ' (Админ)'}</h2>
        <div className={styles.wrapperNav}>
          <div className={styles.navLink}>
            <button
              className={cn({
                [styles.buttonOn]: navMenu === 'setting',
              })}
              onClick={() => setNavMenu('setting')}
            >
              <span className={styles.firstT}></span>
              <span className={styles.secondT}></span>
              Настройки
            </button>
            <button
              className={cn({
                [styles.buttonOn]: navMenu === 'hardcore',
              })}
              onClick={() => setNavMenu('hardcore')}
            >
              <span className={styles.firstT}></span>
              <span className={styles.secondT}></span>
              Хардкор
            </button>
          </div>
          {user && (
            <div className={styles.wrapperInfoProfile}>
              {navMenu === 'setting' && (
                <div className={styles.wrapperSetting}>
                  <span>
                    Никнейм:{' '}
                    <button
                      className={styles.wrapperButton}
                      onClick={() => handleCopy(user.username)}
                    >
                      <ContentCopy />
                      <span>{user.username}</span>
                    </button>
                  </span>
                  <span>
                    Почта:{' '}
                    <button className={styles.wrapperButton} onClick={() => handleCopy(user.mail)}>
                      <ContentCopy />
                      <span>{user.mail}</span>
                    </button>
                  </span>
                  <div className={styles.changePassword}>
                    <p>Смена пароля</p>
                    <Input
                      value={password}
                      setValue={setPassword}
                      error={passwordError}
                      label={'Новый пароль'}
                      password={true}
                    />
                    <Button
                      className={styles.wrapperChangePass}
                      onClick={() => handleChangePassword(password, setPasswordError)}
                    >
                      Подтвердить
                    </Button>
                  </div>
                  {userRoles && userRoles.includes('admin') && (
                    <div className={styles.adminWrapper}>
                      <p>Админ панель</p>
                      <Button
                        color={'green'}
                        className={styles.wrapperButtonAdmin}
                        onClick={() => navigate('/admin')}
                      >
                        Перейти
                      </Button>
                    </div>
                  )}
                  <Button
                    color={'purple'}
                    className={styles.wrapperOut}
                    onClick={() => handleExit()}
                  >
                    Выйти из аккаунта
                  </Button>
                </div>
              )}
              {navMenu == 'hardcore' && (
                <div className={styles.wrapperHardCore}>
                  <iframe src='https://giphy.com/embed/0hChp6z6lE0IRBYTJG' />
                  <h3>Статистика</h3>
                  <div>
                    <div>
                      <div>
                        <p>Примерное время возрождение после смерти:</p>
                        <p>00:06:52:30</p>
                      </div>
                      <div>
                        <p>Дата последней смерти: не умирал</p>
                        <p>Причина последней смерти: не умирал</p>
                      </div>
                    </div>
                    <div>
                      <p>Смертей</p>
                      <HeartIcon />
                      <p>0</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </CardInfo>
    </CardPage>
  )
}

export default ProfilePage
