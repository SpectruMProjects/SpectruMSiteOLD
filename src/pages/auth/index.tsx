import React, { useState } from 'react'
import cn from 'classnames'

import { CardPage } from 'shared/cardPage'
import { FormLogin, FormRegister } from 'widgets/auth'

import styles from './Auth.module.scss'

const AuthPage = (): JSX.Element => {
  const [form, setForm] = useState(false)

  return (
    <CardPage className={styles.wrapperAuth}>
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
