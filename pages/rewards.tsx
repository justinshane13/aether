import styles from '../styles/Rewards.module.css'
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head'
import { useState } from 'react'

const Rewards = () => {
    return (
        <>
            <Head>
                <title>Aether | Rewards</title>
                <meta name="keywords" content="rewards" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <main className={styles.main}>
                <div className={styles.rewardsContainer}>
                    <div className={styles.pageHeaderGreen}><Link href="/"><Image className={styles.leftArrow} src={"/left-arrow.png"} alt="left arrow" width={24} height={24} /></Link></div>
                    <div className={styles.pageHeaderImageDiv}>
                        <Image src="/rewards-image.png" alt="rewards icon" width={160} height={160} />
                    </div>
                    <div className={styles.headingContainer}>
                        <h1 className={styles.heading}>Rewards</h1>
                        <h1 className={styles.greeting}>Bask in the glory of your earned rewards!</h1>
                    </div>
                    <div className={styles.rewardsButtonWrapper}>
                        <RewardsBox streak="1 Day" image="/medal.png"/>
                        <RewardsBox streak="7 Days" image="/medal-2.png"/>
                        <RewardsBox streak="14 Days" image="/medal-3.png"/>
                        <RewardsBox streak="30 Days" image="/ribbon.png"/>
                        <RewardsBox streak="45 Days" image="/medal-4.png"/>
                        <RewardsBox streak="60 Days" image="/rewards.png"/>
                    </div>
                </div>
            </main>
        </>
    );
}

const RewardsBox = ({ streak, image }) => {

    return (
        <div>
            <div className={styles.rewardsButtonContainer}>
                <p className={styles.streak}>{streak}</p>
                <Image className={styles.streakImage} src={image} alt="streak icon" width={70} height={70} />
            </div>
        </div>
    )
}

export default Rewards;