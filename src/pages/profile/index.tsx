import React, { useEffect, useState } from 'react'
import { ContentCopy } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import cn from 'classnames'

import { CardPage } from 'shared/cardPage'
import { useAppDispatch, useAppSelector, useExitAccount, useNotification } from 'processes/hooks'
import { fetchChangePassword, fetchConfirmationRoles, fetchGetUser } from 'processes/store/thunk'
import { getLanguage, getUser, getUserRoles } from 'processes/store/select'
import { Button, CardInfo, Input } from 'shared'
import { HeartIcon } from 'app/assets/svg'

import styles from './Profile.module.scss'

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
  const { profile, error } = useAppSelector(getLanguage)

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
          text: error.errorChangePassword.change,
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
        <h2>
          {profile.head} {userRoles && userRoles.includes('admin') && ' (Админ)'}
        </h2>
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
              {profile.setting.headbutton}
            </button>
            <button
              className={cn({
                [styles.buttonOn]: navMenu === 'hardcore',
              })}
              onClick={() => setNavMenu('hardcore')}
            >
              <span className={styles.firstT}></span>
              <span className={styles.secondT}></span>
              {profile.hardcore.headbutton}
            </button>
          </div>
          {user && (
            <div className={styles.wrapperInfoProfile}>
              {navMenu === 'setting' && (
                <div className={styles.wrapperSetting}>
                  <span>
                    {profile.setting.nickname}:{' '}
                    <button
                      className={styles.wrapperButton}
                      onClick={() => handleCopy(user.username)}
                    >
                      <ContentCopy />
                      <span>{user.username}</span>
                    </button>
                  </span>
                  <span>
                    {profile.setting.email}:{' '}
                    <button className={styles.wrapperButton} onClick={() => handleCopy(user.mail)}>
                      <ContentCopy />
                      <span>{user.mail}</span>
                    </button>
                  </span>
                  <div className={styles.changePassword}>
                    <p>{profile.setting.changepass.head}</p>
                    <Input
                      value={password}
                      setValue={setPassword}
                      error={passwordError}
                      label={profile.setting.changepass.input}
                      password={true}
                    />
                    <Button
                      className={styles.wrapperChangePass}
                      onClick={() => handleChangePassword(password, setPasswordError)}
                    >
                      {profile.setting.changepass.button}
                    </Button>
                  </div>
                  {userRoles && userRoles.includes('admin') && (
                    <div className={styles.adminWrapper}>
                      <p>{profile.setting.admin.head}</p>
                      <Button
                        color={'green'}
                        className={styles.wrapperButtonAdmin}
                        onClick={() => navigate('/admin')}
                      >
                        {profile.setting.admin.button}
                      </Button>
                    </div>
                  )}
                  <Button
                    color={'purple'}
                    className={styles.wrapperOut}
                    onClick={() => handleExit()}
                  >
                    {profile.setting.exit}
                  </Button>
                </div>
              )}
              {navMenu == 'hardcore' && (
                <div className={styles.wrapperHardCore}>
                  <iframe src='https://giphy.com/embed/0hChp6z6lE0IRBYTJG' />
                  <h3>{profile.hardcore.head}</h3>
                  <div>
                    <div>
                      <div>
                        <p>{profile.hardcore.block1.info1}:</p>
                        <p>00:06:52:30</p>
                      </div>
                      <div>
                        <p>{profile.hardcore.block1.info2}: не умирал</p>
                        <p>{profile.hardcore.block1.info3}: не умирал</p>
                      </div>
                    </div>
                    <div>
                      <p>{profile.hardcore.block2.head}</p>
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
