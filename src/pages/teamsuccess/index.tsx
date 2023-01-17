import React from 'react'

import { CardPage } from 'shared/cardPage'
import { CardInfo } from 'shared/cardInfo'
import { useAppSelector } from 'processes/hooks'
import { getLanguage } from 'processes/store/select'

import styles from './styles.module.scss'

const TeamSuccessPage = (): JSX.Element => {
  const { teamsuccess } = useAppSelector(getLanguage)

  return (
    <CardPage className={styles.wrapperTeamSuccess}>
      <CardInfo className={styles.wrapperHeaderTeamSuccess}>
        <h2>{teamsuccess.block1.head}</h2>
        <div>
          <p>{teamsuccess.block1.text1}</p>
          <p>{teamsuccess.block1.text2}</p>
        </div>
      </CardInfo>
      <CardInfo className={styles.wrapperInfo}>
        <h3>{teamsuccess.block2.head}</h3>
        <ul>
          <li>{teamsuccess.block2[1]}</li>
          <li>{teamsuccess.block2[2]}</li>
          <li>{teamsuccess.block2[3]}</li>
          <li>{teamsuccess.block2[4]}</li>
          <li>{teamsuccess.block2[5]}</li>
          <li>{teamsuccess.block2[6]}</li>
          <li>{teamsuccess.block2[7]}</li>
          <li>{teamsuccess.block2[8]}</li>
          <li>{teamsuccess.block2[9]}</li>
          <li>{teamsuccess.block2[10]}</li>
          <li>{teamsuccess.block2[11]}</li>
          <li>{teamsuccess.block2[12]}</li>
          <li>{teamsuccess.block2[13]}</li>
        </ul>
      </CardInfo>
      <CardInfo className={styles.wrapperInfo}>
        <h3>{teamsuccess.block3.head}</h3>
        <ul>
          <li>{teamsuccess.block3[1]}</li>
          <li>{teamsuccess.block3[2]}</li>
          <li>{teamsuccess.block3[3]}</li>
          <li>{teamsuccess.block3[4]}</li>
          <li>{teamsuccess.block3[5]}</li>
          <li>{teamsuccess.block3[6]}</li>
          <li>{teamsuccess.block3[7]}</li>
          <li>{teamsuccess.block3[8]}</li>
        </ul>
      </CardInfo>
      <CardInfo className={styles.wrapperInfo}>
        <h3>{teamsuccess.block4.head}</h3>
        <ul>
          <li>{teamsuccess.block4[1]}</li>
          <li>{teamsuccess.block4[2]}</li>
          <li>{teamsuccess.block4[3]}</li>
          <li>{teamsuccess.block4[4]}</li>
          <li>{teamsuccess.block4[5]}</li>
          <li>{teamsuccess.block4[6]}</li>
          <li>{teamsuccess.block4[7]}</li>
          <li>{teamsuccess.block4[8]}</li>
        </ul>
      </CardInfo>
      <CardInfo className={styles.wrapperInfo}>
        <h3>{teamsuccess.block5.head}</h3>
        <ul>
          <li>{teamsuccess.block5[1]}</li>
          <li>{teamsuccess.block5[2]}</li>
          <li>{teamsuccess.block5[3]}</li>
          <li>{teamsuccess.block5[4]}</li>
          <li>{teamsuccess.block5[5]}</li>
          <li>{teamsuccess.block5[6]}</li>
          <li>{teamsuccess.block5[7]}</li>
          <li>{teamsuccess.block5[8]}</li>
          <li>{teamsuccess.block5[9]}</li>
          <li>{teamsuccess.block5[10]}</li>
          <li>{teamsuccess.block5[11]}</li>
          <li>{teamsuccess.block5[12]}</li>
          <li>{teamsuccess.block5[13]}</li>
          <li>{teamsuccess.block5[14]}</li>
          <li>{teamsuccess.block5[15]}</li>
        </ul>
      </CardInfo>
    </CardPage>
  )
}

export default TeamSuccessPage
