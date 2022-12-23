import React from 'react'

import { CardPage } from 'shared/cardPage'

//import styles from './Profile.module.scss'

const ProfilePage = (): JSX.Element => {
  return (
    <CardPage>
      Profile
      <div>{/* <ProfileInformation user={user}/> */}</div>
    </CardPage>
  )
}

export default ProfilePage
