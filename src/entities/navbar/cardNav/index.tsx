import React from 'react'
import cn from 'classnames'

import CardNavProps from './CardNav.props'
import styles from './CardNav.module.scss'

export const CardNav = ({
  icon,
  activeMenu,
  className,
  children,
  ...props
}: CardNavProps): JSX.Element => {
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
