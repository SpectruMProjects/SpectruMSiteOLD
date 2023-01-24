import React from 'react'
import cn from 'classnames'
import { SportsEsports } from '@mui/icons-material'

import { Button, CardPage, CardInfo } from 'shared'
import { useAppSelector } from 'processes/hooks'
import { getLanguage } from 'processes/store/select'
import { medal, flag, flash, pin, star, tool, minecraft, server1, dollar } from 'app/assets/webp'

import styles from './styles.module.scss'

const HomePage = (): JSX.Element => {
  const { main } = useAppSelector(getLanguage)

  return (
    <CardPage className={styles.wrapperHome}>
      <CardInfo className={styles.titleHomeWrapper}>
        <div className={styles.titleWrapper}>
          <h2>
            {main.header.hello} <span className={styles.logoTitle}>SpectrumMine</span>
          </h2>
          <p className={styles.mainText}>{main.header.info}</p>
        </div>
        <img src={minecraft} alt={'minecraft'} className={styles.minecraft} />
        <iframe className={styles.frog} src='https://giphy.com/embed/1MOuaXcM4XnjvY88I7' />
      </CardInfo>
      <section className={styles.wrapperServer}>
        <Button className={styles.buttonServer}>
          <img src={server1} alt='server' />
          <p>Server #1</p>
        </Button>
        <Button className={styles.buttonServer} aria-disabled={true}>
          <img src={server1} alt='server' />
          <p>Server #2</p>
        </Button>
      </section>
      <CardInfo className={styles.wrapperInfo}>
        <h2>{main.aboutproject.block1.head}</h2>
        <div className={styles.wrapperMainInfo}>
          <p className={styles.firstColor}>
            <img src={medal} alt={'medal'} className={styles.wrapperImage3d} />
            {main.aboutproject.block1.first}
          </p>
          <p className={styles.secondColor}>
            <img src={flag} alt={'flag'} className={styles.wrapperImage3d} />
            {main.aboutproject.block1.second}
          </p>
          <p className={styles.firstColor}>
            <img src={flash} alt={'flash'} className={styles.wrapperImage3d} />
            {main.aboutproject.block1.third}
          </p>
          <p className={styles.secondColor}>
            <img src={star} alt={'star'} className={styles.wrapperImage3d} />
            {main.aboutproject.block1.fourth}
          </p>
          <p className={styles.firstColor}>
            <img src={pin} alt={'pin'} className={styles.wrapperImage3d} />
            {main.aboutproject.block1.fifth}
          </p>
          <p className={styles.secondColor}>
            <img src={tool} alt={'tool'} className={styles.wrapperImage3d} />
            {main.aboutproject.block1.sixth}
          </p>
        </div>
      </CardInfo>
      <CardInfo className={styles.bottomWrapperFirst}>
        <p>{main.aboutproject.block2.info}</p>
      </CardInfo>
      <CardInfo className={styles.bottomWrapperSecond}>
        <span className={cn(styles.helper, styles.anim1)}></span>
        <span className={cn(styles.helper, styles.anim2)}></span>
        <span className={cn(styles.helper, styles.anim3)}></span>
        <span className={cn(styles.helper, styles.anim4)}></span>
        <span className={cn(styles.helper, styles.anim5)}></span>
        <p>{main.aboutproject.block3.info}</p>
      </CardInfo>
      <section className={styles.wrapperBuy}>
        <div className={styles.wrapperTitleBuy}>
          <img src={dollar} alt='dollar' />
          <h2>{main.aboutproject.cardpay.headpay}</h2>
        </div>
        <p>10 $</p>
        <Button className={styles.buttonBuy}>
          <SportsEsports />
          <p>{main.aboutproject.cardpay.button}</p>
        </Button>
      </section>
    </CardPage>
  )
}

export default HomePage
