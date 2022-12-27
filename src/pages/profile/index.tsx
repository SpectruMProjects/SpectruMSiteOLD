import React, { useEffect } from 'react'
import { ContentCopy } from '@mui/icons-material'

import { CardPage } from 'shared/cardPage'
import { useAppDispatch, useAppSelector, useNotification } from 'processes/hooks'
import { fetchGetUser } from 'processes/store/thunk'
import { getUser } from 'processes/store/select'

import styles from './Profile.module.scss'
import { Button } from 'shared'

const ProfilePage = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const notification = useNotification()

  const user = useAppSelector(getUser)

  const handleCopy = (value: string): void => {
    navigator.clipboard.writeText(value)
    notification('copy', 5000)
  }

  useEffect(() => {
    dispatch(fetchGetUser(null))
  }, [])
  return (
    <CardPage>
      <div className={styles.wrapperProfile}>
        <h2>Profile</h2>
        {user && (
          <div className={styles.wrapperInfoProfile}>
            <p>
              username:{' '}
              <Button className={styles.wrapperButton} onClick={() => handleCopy(user.username)}>
                <ContentCopy />
                {user.username}
              </Button>
            </p>
            <p>
              email:{' '}
              <Button className={styles.wrapperButton} onClick={() => handleCopy(user.mail)}>
                <ContentCopy />
                {user.mail}
              </Button>
            </p>
          </div>
        )}
      </div>
    </CardPage>
  )
}

export default ProfilePage
