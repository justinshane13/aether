import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import Navbar from '@/comps/Navbar'

export default function Home() {
  return (
    <>
      <Head>
        <title>Aether</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </Head>
      <main className={styles.main}>
        <div className={styles.homepageContainer}>
          <Navbar />
          <h1 className={styles.greeting}>Hey, Sabrina!</h1>
          <p className={styles.subline}>What do you want to do today?</p>

          <Link className={styles.linkContainerGreen} href="/history">
            <div className={styles.linkContainerCircle}><Image src={"/scroll.png"} width={32} height={32} /></div>
            <div>
              <div className={styles.linkContainerTextLarge}>View History!</div>
              <div className={styles.linkContainerTextSmall}>Check your streak and reward status.</div>
            </div>
          </Link>

          <Link className={styles.linkContainerPurple} href="/competition">
            <div className={styles.linkContainerCircle}><Image src={"/trophy.png"} width={32} height={32} /></div>
            <div>
              <div className={styles.linkContainerTextLarge}>Competition Status!</div>
              <div className={styles.linkContainerTextSmall}>See how you rank against the community.</div>
            </div>
          </Link>

          <Link className={styles.linkContainerPlain} href={"/rewards"}>
            <Image className={styles.linkContainerImage} src={"/rewards-image.png"} width={122} height={122} />
            <div>
              <div className={styles.linkContainerTextLargeBlack}>Rewards</div>
              <div className={styles.linkContainerTextSmallGray}>You have two unclaimed rewards.</div>
            </div>
            <Image className={styles.rightArrow} src={"/right-arrow-2.png"} width={12} height={12} />
          </Link>

          <Link className={styles.linkContainerPlain} href="/nudge">
            <Image className={styles.linkContainerImage} src={"/nudge.png"} width={122} height={122} />
            <div>
              <div className={styles.linkContainerTextLargeBlack}>Nudge Your Friends</div>
              <div className={styles.linkContainerTextSmallGray}>Help others meet their daily goal.</div>
            </div>
            <Image className={styles.rightArrow} src={"/right-arrow-2.png"} width={12} height={12} />
          </Link>
        </div>
      </main>
    </>
  )
}
