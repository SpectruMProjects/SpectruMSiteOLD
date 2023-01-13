import React, { useState } from 'react'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import cn from 'classnames'

import InputProps from './Input.props'
import styles from './Input.module.scss'

export function Input({
  value,
  setValue,
  className,
  type,
  error,
  password = false,
  label,
  color = 'dark',
  ...props
}: InputProps): JSX.Element {
  const [focus, setFocus] = useState<boolean>(false)
  const [visibility, setVisibility] = useState<boolean>(false)

  const handleColor = (val: 'dark' | 'light' | 'static-dark' | 'static-light') => {
    if (val === 'dark') {
      return 'text1'
    }
    if (val === 'light') {
      return 'text6'
    }
    if (val === 'static-dark') {
      return 'text7'
    }
    if (val === 'static-light') {
      return 'text5'
    }
  }

  const handleBackground = (val: 'dark' | 'light' | 'static-dark' | 'static-light') => {
    if (val === 'dark') {
      return 'background1'
    }
    if (val === 'light') {
      return 'background5'
    }
    if (val === 'static-dark') {
      return 'background8'
    }
    if (val === 'static-light') {
      return 'background6'
    }
  }

  const focusStyle = (): boolean => {
    if (focus) {
      return true
    } else {
      return value.trim().length !== 0
    }
  }

  return (
    <div className={styles.wrapperInput}>
      <label
        className={cn(styles.labelInput, {
          [styles.labelInputOn]: focusStyle(),
        })}
        style={{ color: `var(--${handleColor(color)})` }}
      >
        {label}
      </label>
      <input
        className={cn(className, styles.input, {
          [styles.inputOnError]: error,
          [styles.inputOnFocus]: focus,
          [styles.inputPasswordOn]: password,
        })}
        onFocusCapture={() => setFocus(true)}
        onBlurCapture={() => setFocus(false)}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type={password ? (visibility ? 'text' : 'password') : type}
        style={{
          color: `var(--${handleColor(color)})`,
          background: `var(--${handleBackground(color)})`,
        }}
        {...props}
      />
      {password ? (
        <button
          className={styles.visibilityIcon}
          style={{ color: `var(--${handleColor(color)})` }}
          onClick={() => setVisibility(!visibility)}
        >
          {!visibility ? <Visibility /> : <VisibilityOff />}
        </button>
      ) : null}
    </div>
  )
}
