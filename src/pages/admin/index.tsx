import React, { useEffect, useState } from 'react'
import { Close, Add } from '@mui/icons-material'
import cn from 'classnames'

import { CardPage } from 'shared/cardPage'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from 'processes/hooks'
import { getLanguage, getTheme, getUserRoles } from 'processes/store/select'
import { actionChangeTheme } from 'processes/store/slice'
import { Button, CardInfo, Input } from 'shared'
import { InputTheme } from 'features/inputTheme'

import styles from './styles.module.scss'

const AdminPage = (): JSX.Element => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const token = localStorage.getItem('accessToken')
  const userRoles = useAppSelector(getUserRoles)
  const { admin } = useAppSelector(getLanguage)

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
            <p>{ban ? admin.usercard.cardmodal.ban.noban : admin.usercard.cardmodal.ban.ban}</p>
            <div>
              <button onClick={() => handleBanUser(false)}>
                {admin.usercard.cardmodal.ban.button1}
              </button>
              <button onClick={() => handleBanUser(true)}>
                {admin.usercard.cardmodal.ban.button2}
              </button>
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
            <p>{admin.usercard.cardmodal.del.info}</p>
            <div>
              <button onClick={() => handleRemoveUser(false)}>
                {admin.usercard.cardmodal.del.button1}
              </button>
              <button onClick={() => handleRemoveUser(true)}>
                {admin.usercard.cardmodal.del.button2}
              </button>
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
            <p>{admin.usercard.cardmodal.change.info}</p>
            <Input
              color={'static-light'}
              label={admin.usercard.cardmodal.change.email}
              value={''}
              setValue={() => {
                /**/
              }}
            />
            <Input
              color={'static-light'}
              label={admin.usercard.cardmodal.change.login}
              value={''}
              setValue={() => {
                /**/
              }}
            />
            <div>
              <button onClick={() => handleChangeUser(false)}>
                {admin.usercard.cardmodal.change.button1}
              </button>
              <button onClick={() => handleChangeUser(true)}>
                {admin.usercard.cardmodal.change.button2}
              </button>
            </div>
          </CardInfo>
        </CardInfo>
        <CardInfo className={styles.wrapperListMenu}>
          <div>
            <h2>{admin.menu.head}</h2>
            <Button onClick={handleChangeTheme} color={'purple'}>
              {admin.menu.button.theme}
              <InputTheme theme={theme} />
            </Button>
            <Button
              onClick={() => {
                setUsersList(true)
                setUserInfo(false)
              }}
            >
              {admin.menu.button.users}
            </Button>
            <h3>{admin.menu.users}</h3>
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
            {admin.menu.exit}
          </Button>
        </CardInfo>
        {usersList && (
          <CardInfo className={styles.wrapperListUser} background={'dark-middle'}>
            <h2>{admin.userpage.head}</h2>
            <Input value={search} setValue={setSearch} label={admin.userpage.search} />
            <ul>
              <li>
                <span>{admin.userpage.card.email}: sosiska@gmail.com</span>
                <div>
                  <button
                    className={cn(styles.buttonWrap, styles.infoBtn)}
                    onClick={() => {
                      setUserInfoButton(true)
                      setUserInfo(true)
                      setUsersList(false)
                    }}
                  >
                    {admin.userpage.card.about}
                  </button>
                  <button
                    className={cn(styles.buttonWrap, styles.banBtn)}
                    onClick={handleOpenModalBan}
                  >
                    {ban ? admin.userpage.card.ban.noban : admin.userpage.card.ban.ban}
                  </button>
                  <button onClick={handleOpenModalRemove} className={styles.buttonWrap}>
                    {admin.userpage.card.del}
                  </button>
                </div>
              </li>
            </ul>
          </CardInfo>
        )}
        {userInfo && (
          <CardInfo className={styles.wrapperUserInfo} background={'dark-middle'}>
            <section className={styles.infoSection}>
              <CardInfo>{admin.usercard.model.head}</CardInfo>
              <CardInfo>
                <h3>{admin.usercard.info.head}</h3>
                <section>
                  <span>{admin.usercard.info.email}: sosiska@gmail.com</span>
                  <span>{admin.usercard.info.nickname}: sosiska</span>
                  <button
                    onClick={handleOpenModalChange}
                    className={cn(styles.buttonWrap, styles.changeBtn)}
                  >
                    {admin.usercard.info.buttonchange}
                  </button>
                  <div>
                    <h4>{admin.usercard.info.role}:</h4>
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
                    {ban ? admin.usercard.info.buttonban.noban : admin.usercard.info.buttonban.ban}
                  </button>
                  <button onClick={handleOpenModalRemove} className={styles.buttonWrap}>
                    {admin.usercard.info.buttondel}
                  </button>
                </section>
              </CardInfo>
            </section>
            <CardInfo>
              <h3>{admin.usercard.statistic.head}</h3>
            </CardInfo>
            <CardInfo>
              <h3>{admin.usercard.bag.head}</h3>
            </CardInfo>
            <CardInfo>
              <h3>{admin.usercard.response.head}</h3>
            </CardInfo>
          </CardInfo>
        )}
      </CardInfo>
    </CardPage>
  )
}

export default AdminPage
