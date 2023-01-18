import React from 'react'
import cn from 'classnames'
import { useNavigate } from 'react-router-dom'

import { Button, CardPage, CardInfo } from 'shared'
import { AppleIcon, BerriesIcon, CarrotIcon, HeartIcon, WatermelonIcon } from 'app/assets/svg'
import { useAppSelector } from 'processes/hooks'
import { getLanguage } from 'processes/store/select'

import styles from './styles.module.scss'

const HardcorePage = (): JSX.Element => {
  const navigate = useNavigate()

  const { hardcore } = useAppSelector(getLanguage)

  return (
    <CardPage className={styles.wrapperHardcore}>
      <CardInfo className={styles.wrapperLife}>
        <section className={styles.wrapperInfo}>
          <div className={styles.infoFirst}>
            <Button>{hardcore.checkserver.button1}</Button>
            <div className={styles.minecraftInfo}>
              <p>License</p>
              <p>1.19.2</p>
              <p>Minecraft:JE</p>
            </div>
          </div>
          <div className={styles.infoSecond}>
            <h2>Minecraft</h2>
            <h2>Vanilla Hardcore SMP</h2>
          </div>
        </section>
        <section className={styles.wrapperHeart}>
          <p>0</p>
          <HeartIcon />
          <HeartIcon />
          <HeartIcon />
          <HeartIcon />
          <HeartIcon />
          <HeartIcon />
          <HeartIcon />
          <HeartIcon />
          <HeartIcon />
          <HeartIcon />
          <HeartIcon />
          <p>50</p>
          <h3>Online</h3>
        </section>
      </CardInfo>
      <CardInfo className={styles.wrapperServer} background={'dark-middle'}>
        <h2>{hardcore.abouthardcore.about}</h2>
        <ul>
          <li>
            <p>Vanilla</p>
            <span></span>
            <p>{hardcore.abouthardcore.vanilla}</p>
          </li>
          <li>
            <p>Hardcore</p>
            <span></span>
            <p>{hardcore.abouthardcore.hardcore}</p>
          </li>
          <li>
            <p>SMP</p>
            <span></span>
            <p>{hardcore.abouthardcore.smp}</p>
          </li>
        </ul>
        <AppleIcon className={styles.icon} />
        <WatermelonIcon className={cn(styles.icon, styles.melon)} />
        <CarrotIcon className={cn(styles.icon, styles.carrot)} />
        <BerriesIcon className={cn(styles.icon, styles.berries)} />
      </CardInfo>
      <CardInfo className={styles.wrapperInfoHardcore}>
        <h2>{hardcore.workhradcore.how}</h2>
        <p>{hardcore.workhradcore.maintext}</p>
        <span>*{hardcore.workhradcore.note}</span>
      </CardInfo>
      <CardInfo className={styles.wrapperDownInfo} background={'dark-middle'}>
        <h2>{hardcore.checkserver.head}</h2>
        <div>
          <iframe src='https://giphy.com/embed/UdXlLBeKNW9xqemxYk' />
          <div>
            <p>{hardcore.checkserver.info}</p>
            <div>
              <Button>{hardcore.checkserver.button1}</Button> {hardcore.checkserver.or}{' '}
              <Button onClick={() => navigate('/profile')}>{hardcore.checkserver.button2}</Button>
            </div>
          </div>
        </div>
      </CardInfo>
    </CardPage>
  )
}

export default HardcorePage
