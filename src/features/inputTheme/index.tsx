import React from 'react'
import { NightsStay as Dark, LightMode as Light } from '@mui/icons-material'
import cn from 'classnames'

import InputProps from './InputTheme.props'
import styles from './InputTheme.module.scss'

export const InputTheme = ({ theme, className, ...props }: InputProps): JSX.Element => {
  return (
    <div className={cn(className, styles.wrapperInputTheme)}>
      <div className={styles.checkBox}>
        <input
          type='checkbox'
          checked={theme}
          onChange={() => {
            //
          }}
          {...props}
        />
        <label>
          {theme ? <Dark className={styles.icon} /> : <Light className={styles.icon} />}
        </label>
      </div>
    </div>
  )
}
