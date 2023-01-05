import React from 'react'
import { HeadsetMic, Telegram } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

import { logo } from 'app/assets/webp'
import { DiscordIcon } from 'app/assets/svg'

import styles from './styles.module.scss'

export const Footer = (): JSX.Element => {
  const navigate = useNavigate()

  return (
    <footer className={styles.footerWrapper}>
      <section className={styles.topWrapFooter}>
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
      </section>
      <section className={styles.topWrapFooter}>
        <p>
          Организация не имеет никакого отношения к Mojang AB. Все права на игру принадлежат Mojang
          AB. Весь остальной контент принадлежит SpectruMTeam.
        </p>
        <div className={styles.linksInfo}>
          <button disabled={true}>Контакты</button>
          <button disabled={true}>Способы оплаты</button>
          <button onClick={() => navigate('/team/success')}>Пользовательское соглашение</button>
        </div>
      </section>
    </footer>
  )
}
