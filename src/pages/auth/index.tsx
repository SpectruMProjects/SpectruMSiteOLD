import React, { useState } from 'react'
import cn from 'classnames'

import { CardPage } from 'shared/cardPage'
import { FormLogin, FormRegister } from 'widgets/auth'

import AuthProps from './Auth.props'
import styles from './Auth.module.scss'

const AuthPage = ({ className, ...props }: AuthProps): JSX.Element => {
  const [form, setForm] = useState(false)

  return (
    <CardPage className={cn(className, styles.wrapperAuth)} {...props}>
      <div className={styles.wrapperFormWrap}>
        <div
          className={cn(styles.wrapperFormTop, {
            [styles.wrapperFormOn]: !form,
          })}
        >
          <FormLogin setForm={setForm} />
        </div>
        <div
          className={cn(styles.wrapperFormBottom, {
            [styles.wrapperFormOn]: form,
          })}
        >
          <FormRegister setForm={setForm} />
        </div>
      </div>
    </CardPage>
  )
}

export default AuthPage
