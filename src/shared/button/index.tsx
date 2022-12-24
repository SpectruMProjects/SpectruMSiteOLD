import React from 'react'
import cn from 'classnames'

import ButtonProps from './Button.props'
import styles from './Button.module.scss'
import { useState } from 'react'

export function Button({ children, className, ...props }: ButtonProps): JSX.Element {
  const [click, setClick] = useState(false)

  return (
    <button
      onMouseDown={() => {
        setClick(true)
      }}
      onMouseUp={() => {
        setClick(false)
      }}
      className={cn(className, styles.buttonWrapper, {
        [styles.buttonWrapperOn]: click,
      })}
      {...props}
    >
      {children}
    </button>
  )
}
