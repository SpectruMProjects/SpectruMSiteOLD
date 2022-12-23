import React from 'react'
import cn from 'classnames'

import ButtonProps from './Button.props'
import styles from './Button.module.scss'
import { useState } from 'react'

//----------------------------------------------------------------
//нужно будет добавить чилдер чтобы можно было в кнопку прокидывать любые компоненты
//----------------------------------------------------------------

export function Button({ text, className, ...props }: ButtonProps): JSX.Element {
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
      {text}
    </button>
  )
}
