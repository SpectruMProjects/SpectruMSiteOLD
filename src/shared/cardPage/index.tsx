import React from 'react'
import cn from 'classnames'

import CardPageProps from './CardPage.props'
import styles from './CardPage.module.scss'

export function CardPage({ children, className, ...props }: CardPageProps): JSX.Element {
  return (
    <main className={cn(className, styles.wrapperCard)} {...props}>
      {children}
    </main>
  )
}
