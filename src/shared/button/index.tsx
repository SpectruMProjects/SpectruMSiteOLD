import React from 'react'
import cn from 'classnames'

import ButtonProps from './Button.props'
import styles from './Button.module.scss'
import { useState } from 'react'

export function Button({
  children,
  color = 'blue',
  className,
  ...props
}: ButtonProps): JSX.Element {
  const [click, setClick] = useState(false)

  const handleColor = (color: string): string => {
    if (color === 'blue') return 'primary'
    if (color === 'purple') return 'mauve'
    if (color === 'orange') return 'flamingo'
    if (color === 'green') return 'success'

    return 'primary'
  }

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
      style={{ background: `var(--${handleColor(color)})` }}
      {...props}
    >
      {children}
    </button>
  )
}
