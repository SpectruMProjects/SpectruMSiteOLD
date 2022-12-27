import React from 'react'
import cn from 'classnames'

import { InputTheme } from 'features/inputTheme'

import CardNavThemeProps from './CardNavTheme.props'
import styles from './CardNavTheme.module.scss'

export const CardNavTheme = ({
  text,
  icon,
  theme,
  activeMenu,
  className,
  ...props
}: CardNavThemeProps): JSX.Element => {
  return (
    <button className={cn(className, styles.wrapperCardMenu)} {...props}>
      <span className={cn(styles.iconWrap)}>{icon}</span>
      <div
        className={cn(styles.wrapperText, {
          [styles.wrapperTextOn]: activeMenu,
        })}
      >
        {text}
        <InputTheme theme={theme} />
      </div>
    </button>
  )
}
