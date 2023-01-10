import React, { useEffect, useState } from 'react'

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
            <Button>Пользователи</Button>
          </div>
          <Button color={'purple'} onClick={() => navigate('/profile')}>
            Выйти
          </Button>
        </CardInfo>
        <CardInfo className={styles.wrapperListUser} background={'dark-middle'}>
          <Input value={search} setValue={setSearch} label={'Поиск'} />
          <ul>
            <li>
              <span>Почта: sosiska@gmail.com</span>
              <div>
                <button>Подробнее</button>
                <button>Забанить</button>
                <button>Удалить</button>
              </div>
            </li>
          </ul>
        </CardInfo>
      </CardInfo>
    </CardPage>
  )
}

export default AdminPage
