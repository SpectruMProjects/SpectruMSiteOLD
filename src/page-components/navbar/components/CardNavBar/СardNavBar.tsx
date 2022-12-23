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
}: CardNavBardProps): JSX.Element => {
  const navigate = useNavigate()

  useEffect(() => {
    if (selected) {
      setTop(index)
    }
  }, [index, selected, setTop])

  return (
    <div
      className={cn(styles.wrapperCardMenu, {
        [styles.wrapperCardMenuSelect]: selected,
      })}
      key={text}
      onClick={() => {
        setTop(index)
        navigate(to)
      }}
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
    </div>
  )
}
