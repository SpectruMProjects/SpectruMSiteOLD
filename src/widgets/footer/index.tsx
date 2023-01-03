import React from 'react'
import { HeadsetMic, Telegram } from '@mui/icons-material'

import { logo } from 'app/assets/webp'
import { DiscordIcon } from 'app/assets/svg'

import styles from './styles.module.scss'

export const Footer = (): JSX.Element => {
  return (
    <footer className={styles.footerWrapper}>
      <div className={styles.topWrapFooter}>
        <div className={styles.titleFooter}>
          <img src={logo} alt={'logo'} />
          <h2>SpectrumMine</h2>
        </div>
        <div className={styles.linksIcon}>
          <a href={'https://discord.gg/TfXHcReR'} target='_blank' rel='noreferrer'>
            <DiscordIcon />
          </a>
          <a href='https://t.me/spectrumine' target='_blank' rel='noreferrer'>
            <Telegram />
          </a>
          <a
            href={'/'}
            target='_blank'
            rel='noreferrer'
            onClick={(e) => {
              e.preventDefault()
            }}
          >
            <HeadsetMic />
          </a>
        </div>
      </div>
      <div className={styles.topWrapFooter}>
        <p>Все права защищены.</p>
        <div className={styles.linksInfo}>
          <a
            href={'/'}
            onClick={(e) => {
              e.preventDefault()
            }}
          >
            Контакты
          </a>
          <a
            href={'/'}
            onClick={(e) => {
              e.preventDefault()
            }}
          >
            Способы оплаты
          </a>
          <a
            href={'/'}
            onClick={(e) => {
              e.preventDefault()
            }}
          >
            Пользовательское соглашение
          </a>
        </div>
      </div>
    </footer>
  )
}