import React from 'react'
import cn from 'classnames'
import { SportsEsports } from '@mui/icons-material'

import { CardPage } from 'shared/cardPage'
import { Button } from 'shared'
import { medal, flag, flash, pin, star, tool, minecraft, server1, dollar } from 'app/assets/webp'

import styles from './Home.module.scss'

const HomePage = (): JSX.Element => {
  return (
    <CardPage className={styles.wrapperHome}>
      <section className={styles.titleHomeWrapper}>
        <div className={styles.titleWrapper}>
          <h2>
            Добро пожаловать на <p className={styles.logoTitle}>SpectrumMine</p>
          </h2>
          <p className={styles.mainText}>
            Почувствуйте ламповую и дружелюбную атмосферу, где все игроки чувствуют себя как дома
          </p>
        </div>
        <img src={minecraft} alt={'minecraft'} className={styles.minecraft} />
        <iframe className={styles.frog} src='https://giphy.com/embed/1MOuaXcM4XnjvY88I7' />
      </section>
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
      <section className={styles.wrapperInfo}>
        <h2>О проекте</h2>
        <div className={styles.wrapperMainInfo}>
          <p className={styles.firstColor}>
            <img src={medal} alt={'medal'} className={styles.wrapperImage3d} />
            Наши сервера Minecraft являются уникальными и неповторимыми. Они стабильны и не содержат
            П2В (платные преимущества).
          </p>
          <p className={styles.secondColor}>
            <img src={flag} alt={'flag'} className={styles.wrapperImage3d} />
            На наших серверах вы сможете испытать новые игровые режимы, уникальные мини-игры и
            события, которые не найдете нигде еще.
          </p>
          <p className={styles.firstColor}>
            <img src={flash} alt={'flash'} className={styles.wrapperImage3d} />
            Наши администраторы и модераторы работают над тем, чтобы сделать игру на наших серверах
            максимально приятной и безопасной для всех игроков. Если у вас возникнут какие-то
            вопросы или проблемы, не стесняйтесь обращаться к нам за помощью. Мы всегда рады помочь.
          </p>
          <p className={styles.secondColor}>
            <img src={star} alt={'star'} className={styles.wrapperImage3d} />
            Мы стремимся к тому, чтобы наши сервера были интересными и разнообразными, чтобы всегда
            было чем заняться.
          </p>
          <p className={styles.firstColor}>
            <img src={pin} alt={'pin'} className={styles.wrapperImage3d} />
            Мы также стараемся предоставить нашим игрокам справедливую игру без преимуществ для
            игроков, которые платят деньги.
          </p>
          <p className={styles.secondColor}>
            <img src={tool} alt={'tool'} className={styles.wrapperImage3d} />
            Вы сможете провести свое время на наших серверах, зная, что все игроки имеют равные
            шансы. Мы также регулярно обновляем наши сервера, чтобы вы всегда играли на самой
            последней версии Minecraft.
          </p>
        </div>
      </section>
      <section className={styles.bottomWrapperFirst}>
        <p>
          Почувствуйте ламповую и дружелюбную атмосферу, где все игроки чувствуют себя как дома. Мы
          разработали специальные функции и события, чтобы улучшить взаимодействие между игроками и
          создать уютную атмосферу. Мы также стремимся создать сообщество, которое является открытым
          и приветливым ко всем новым игрокам.
        </p>
      </section>
      <section className={styles.bottomWrapperSecond}>
        <span className={cn(styles.helper, styles.anim1)}></span>
        <span className={cn(styles.helper, styles.anim2)}></span>
        <span className={cn(styles.helper, styles.anim3)}></span>
        <span className={cn(styles.helper, styles.anim4)}></span>
        <span className={cn(styles.helper, styles.anim5)}></span>
        <p>
          Наши администраторы и модераторы всегда рады помочь новичкам и ответить на любые вопросы,
          у которых могут возникнуть. Мы надеемся, что вы почувствуете себя как дома на наших
          серверах и станете частью нашего уютного сообщества. Ждем вас на наших серверах!
        </p>
      </section>
      <section className={styles.wrapperBuy}>
        <div className={styles.wrapperTitleBuy}>
          <img src={dollar} alt='dollar' />
          <h2>Стоимость доступа на Хардкор</h2>
        </div>
        <p>10 $</p>
        <Button className={styles.buttonBuy}>
          <SportsEsports />
          <p>Приобристи доступ на сервер</p>
        </Button>
      </section>
    </CardPage>
  )
}

export default HomePage
