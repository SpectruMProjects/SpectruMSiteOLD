import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import cn from 'classnames'

import CardNavBardProps from './СardNavBar.props'
import styles from './СardNavBar.module.scss'

export const CardNavBar = ({
  selected,
  text,
  icon,
  to,
  activeMenu,
  index,
  setTop,
  ...props
}: CardNavBardProps): JSX.Element => {
  const navigate = useNavigate()

  useEffect(() => {
    if (selected) {
      setTop(index)
    }
  }, [index, selected, setTop])

  return (
    <button
      className={cn(styles.wrapperCardMenu, {
        [styles.wrapperCardMenuSelect]: selected,
      })}
      onClick={() => {
        setTop(index)
        navigate(to)
      }}
      {...props}
    >
      <span
        className={cn(styles.iconWrap, {
          [styles.iconOn]: selected,
          [styles.iconActive]: selected && activeMenu,
        })}
      >
        {icon}
      </span>
      <p
        className={cn(styles.wrapperText, {
          [styles.wrapperTextOn]: activeMenu,
        })}
      >
        {text}
      </p>
    </button>
  )
}
