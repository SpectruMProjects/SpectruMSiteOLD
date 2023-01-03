import React from 'react'

import { CardPage } from 'shared/cardPage'
import { Button } from 'shared'
import { HeartIcon } from 'app/assets/svg'

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
          <li></li>
        </ul>
      </section>
    </CardPage>
  )
}

export default HardcorePage
