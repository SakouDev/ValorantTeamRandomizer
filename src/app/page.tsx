import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import ButtonValorant from '@/components/buttonValorant/button'
import Valorant_Logo from '../../public/Valorant_logo.svg'

import Number4 from '../../public/4.jpg'
import Number6 from '../../public/6.jpg'
import Number8 from '../../public/8.jpg'
import Number10 from '../../public/10.jpg'
import Jett from '../../public/jett.png'

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.left}>
        <Image className={styles.valorantLogo} src={Valorant_Logo} alt='ValorantLogo' />
        <div className={styles.title}>
          <h1>Nombre de joueur :</h1>
        </div>
        <div className={styles.numberOfPlayer}>
          <div className={styles.numberDiv}>
            <ButtonValorant url={`/playerCreation`} query={{numberOfPlayer : 4}} imageLink={Number4} />
            <ButtonValorant url={`/playerCreation`} query={{numberOfPlayer : 6}} imageLink={Number6} />
            <ButtonValorant url={`/playerCreation`} query={{numberOfPlayer : 8}} imageLink={Number8} />
            <ButtonValorant url={`/playerCreation`} query={{numberOfPlayer : 10}} imageLink={Number10} />
          </div>
        </div>
      </section>
      <section className={styles.right}>
        <Image className={styles.imageRight} height={800} width={700} src={Jett} alt='Jett' />
      </section>
    </main>
  )
}
