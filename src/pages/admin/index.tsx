import React, { useEffect } from 'react'

import { CardPage } from 'shared/cardPage'
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from 'processes/hooks'
import { getUserRoles } from 'processes/store/select'
import { CardInfo } from 'shared'

//import styles from './styles.module.scss'

const AdminPage = (): JSX.Element => {
  const navigate = useNavigate()

  const token = localStorage.getItem('accessToken')
  const userRoles = useAppSelector(getUserRoles)

  useEffect(() => {
    if (!token && !userRoles.includes('admin')) {
      navigate('/')
    }
  }, [])

  return (
    <CardPage>
      <CardInfo>admin</CardInfo>
    </CardPage>
  )
}

export default AdminPage
