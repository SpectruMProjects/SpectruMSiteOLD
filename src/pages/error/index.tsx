import React from 'react'
import { NavLink } from 'react-router-dom'

import { CardPage } from 'shared/cardPage'
import { Button, CardInfo } from 'shared'
import { useAppSelector } from 'processes/hooks'
import { getLanguage } from 'processes/store/select'

import ErrorProps from './types.props'
import styles from './styles.module.scss'

const ErrorPage = ({ text }: ErrorProps): JSX.Element => {
  const { errorpage } = useAppSelector(getLanguage)

  return (
    <CardPage className={styles.wrapperError}>
      <CardInfo background={'dark-light'} className={styles.wrapperErrorInfo}>
        <h2>{errorpage.text[text]}</h2>
        <p>{errorpage.textinfo}</p>
        <NavLink to={'/'} className={styles.buttonWrapper}>
          <Button>{errorpage.button}</Button>
        </NavLink>
      </CardInfo>
    </CardPage>
  )
}

export default ErrorPage
