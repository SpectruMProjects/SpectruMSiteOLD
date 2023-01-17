import React from 'react'
import { HeadsetMic, Telegram } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

import { logo } from 'app/assets/webp'
import { DiscordIcon } from 'app/assets/svg'
import { useAppSelector } from 'processes/hooks'
import { getLanguage } from 'processes/store/select'

import styles from './styles.module.scss'

export const Footer = (): JSX.Element => {
  const navigate = useNavigate()
  const { footer } = useAppSelector(getLanguage)

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
        <p>{footer.info}</p>
        <div className={styles.linksInfo}>
          <button disabled={true}>{footer.button.contact}</button>
          <button disabled={true}>{footer.button.pay}</button>
          <button onClick={() => navigate('/team/success')}>{footer.button.teamsuccess}</button>
        </div>
      </section>
    </footer>
  )
}
