import React, { useEffect } from 'react'

import { CardPage } from 'shared/cardPage'
import { useNavigate } from 'react-router-dom'

//import styles from './styles.module.scss'

const AdminPage = (): JSX.Element => {
  const navigate = useNavigate()

  const token = localStorage.getItem('accessToken')

  useEffect(() => {
    if (!token) {
      navigate('/')
    }
  }, [])

  return <CardPage>AdminPage</CardPage>
}

export default AdminPage
