import React from 'react'

import { Card } from 'components/card'

import { Skin } from '../'

import { profileInformationProps } from './ProfileInformation.props'

export function ProfileInformation({ user }: profileInformationProps): JSX.Element {
  return (
    <Card>
      <div>
        <Skin />
        <div>
          <p>{user.username}</p>
          <p>{user.mail}</p>
        </div>
      </div>
      <div>Здесь будет разная статистика и информация о группах, друзьях, странах и т.д.</div>
    </Card>
  )
}
