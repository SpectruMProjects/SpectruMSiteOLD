import React, { useEffect, useState } from 'react'
import cn from 'classnames'
import { Close } from '@mui/icons-material'

import NotifyCardProps from './NotifyCard.props'
import styles from './NotifyCard.module.scss'

export const NotifyCard = ({
  icon,
  text,
  color,
  time,
  remove,
  action,
  className,
  ...props
}: NotifyCardProps): JSX.Element => {
  const [timer, setTimer] = useState(false)

  useEffect(() => {
    if (time) {
      setTimer(true)
      setTimeout(() => {
        setTimer(false)
      }, time - 250)
    }
  }, [])

  return (
    <div
      style={{ background: `var(--${color})` }}
      className={cn(className, styles.wrapperNotification, {
        [styles.wrapperNotificationOn]: timer,
      })}
      {...props}
    >
      <div className={styles.wrapperUpNotification}>
        <div className={styles.notificationIcon}>{icon}</div>
        <p className={styles.text}>{text}</p>
        {remove && (
          <button className={styles.buttonWrapperCancel} onClick={remove} tabIndex={0}>
            <Close className={styles.cancelIcon} />
          </button>
        )}
      </div>
      {action && (
        <div className={styles.wrapperActionButton}>
          <button className={styles.actionButton} onClick={(e) => action.func(e)} tabIndex={0}>
            {action.text}
          </button>
        </div>
      )}
      <span
        className={cn(styles.timeline, { [styles.timelineOn]: timer })}
        style={{ transitionDuration: `${time / 1000}s` }}
      ></span>
    </div>
  )
}
