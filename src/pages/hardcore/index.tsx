import React from 'react'
import cn from 'classnames'

import { CardPage } from 'shared/cardPage'
import { Button } from 'shared'
import { AppleIcon, BerriesIcon, CarrotIcon, HeartIcon, WatermelonIcon } from 'app/assets/svg'

import styles from './styles.module.scss'

const HardcorePage = (): JSX.Element => {
  return (
    <CardPage className={styles.wrapperHardcore}>
      <h2>Хардкор</h2>
      <section className={styles.wrapperLife}>
        <section className={styles.wrapperInfo}>
          <div className={styles.infoFirst}>
            <Button>Скопировать IP-адрес</Button>
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
      </section>
      <section className={styles.wrapperServer}>
        <h2>О сервере</h2>
        <ul>
          <li>
            <p>Vanilla</p>
            <span></span>
            <p>Ванильный геймплей, минимальное количество плагинов для комфортной игры</p>
          </li>
          <li>
            <p>Hardcore</p>
            <span></span>
            <p>Только хардкор! Платите за свою смерть временем потраченным на сервере</p>
          </li>
          <li>
            <p>SMP</p>
            <span></span>
            <p>“Survival Multiplayer” - Проще говоря обычное выживание и никаких поблажек</p>
          </li>
        </ul>
        <AppleIcon className={styles.icon} />
        <WatermelonIcon className={cn(styles.icon, styles.melon)} />
        <CarrotIcon className={cn(styles.icon, styles.carrot)} />
        <BerriesIcon className={cn(styles.icon, styles.berries)} />
      </section>
      <section className={styles.wrapperInfoHardcore}>
        <h2>Как работает Hardcore режим?</h2>
        <p>
          Если вы прошаренный игрок в Minecraft, то вы знаете что режим Hardcore работает по
          принципу одной смерти. Однако на сервере эта механика очень расточительна, т.к. по
          неосторожности можно потерять не только прогресс, но и возможность играть с друзьями.
          Поэтому мы сделали плагин который даст возможность возродиться спустя время, которое вы
          провели на сервере
        </p>
        <span>
          *Для того чтобы точно расчитать время возрождения, мы пользуемся формулой описанной{' '}
          <a href={''}>здесь</a>
        </span>
      </section>
    </CardPage>
  )
}

export default HardcorePage

//<iframe src="https://giphy.com/embed/UdXlLBeKNW9xqemxYk" />
