import React from 'react'
import cn from 'classnames'

import CardNavThemeProps from './CardNavTheme.props'
import styles from './CardNavTheme.module.scss'

export const CardNav = ({
  icon,
  activeMenu,
  className,
  children,
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
        {children}
      </div>
    </button>
  )
}
