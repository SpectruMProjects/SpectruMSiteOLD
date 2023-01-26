import React from 'react'
import cn from 'classnames'

import CardInfoProps from './variables.props'
import styles from './styles.module.scss'

export const CardInfo = ({
  background = 'dark-light',
  className,
  children,
  ...props
}: CardInfoProps): JSX.Element => {
  const handleColor = (
    val: 'dark-dark' | 'dark-light' | 'dark-middle' | 'blue' | 'green' | 'opacity',
  ) => {
    if (val === 'dark-middle') {
      return 'dark-middle'
    }
    if (val === 'dark-dark') {
      return 'dark'
    }
    if (val === 'dark-light') {
      return 'dark-light'
    }
    if (val === 'blue') {
      return 'primary'
    }
    if (val === 'green') {
      return 'success'
    }
    if (val === 'opacity') {
      return 'shadow-opacity-static03'
    }
  }
  return (
    <section
      className={cn(className, styles.wrapperCardInfo)}
      style={{ background: `var(--${handleColor(background)})` }}
      {...props}
    >
      {children}
    </section>
  )
}
