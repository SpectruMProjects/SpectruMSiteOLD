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
  const handleColor = (val: 'dark-dark' | 'dark-light' | 'dark-middle') => {
    if (val === 'dark-middle') {
      return 'background7'
    }
    if (val === 'dark-dark') {
      return 'background8'
    }
    if (val === 'dark-light') {
      return 'background4'
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
