import styles from '../styles/Nudge.module.css'
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head'
import { useState } from 'react'

const Nudge = () => {
    return (
        <>
            <Head>
                <title>Aether | Nudge</title>
                <meta name="keywords" content="nudge" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <main className={styles.main}>
                <div className={styles.nudgeContainer}>
                    <div className={styles.pageHeaderGreen}><Link href="/"><Image className={styles.leftArrow} src={"/left-arrow.png"} alt="left arrow" width={24} height={24} /></Link></div>
                    <div className={styles.pageHeaderImageDiv}>
                        <Image src="/nudge.png" alt="nudge icon" width={160} height={160} />
                    </div>
                    <div className={styles.headingContainer}>
                        <h1 className={styles.heading}>Nudge</h1>
                        <h1 className={styles.greeting}>These users haven't hit their goal for the day!</h1>
                    </div>
                    <NudgeRow user="MysticEcho87"/>
                    <NudgeRow user="CyberZenMaster"/>
                    <NudgeRow user="WanderlustDreamer"/>
                    <NudgeRow user="NovaNomad2023"/>
                    <NudgeRow user="CosmicVoyager123"/>
                    <NudgeRow user="PixelPioneer92"/>
                    <NudgeRow user="MidnightWhisperer"/>
                    <NudgeRow user="SereneSeeker99"/>
                    <NudgeRow user="DreamWeaverEternal"/>
                </div>
            </main>
        </>
    );
}

const NudgeRow = ({ user }) => {
    const [isNudged, setIsNudged] = useState(false);

    const handleClick = () => {
        setIsNudged(!isNudged);
    }

    return (
        <div>
            <div className={styles.nudgeButtonContainer}>
                <p className={styles.user}>{user}</p>
                <div onClick={handleClick} className={isNudged ? styles.nudged : styles.nudge}><p>{isNudged ? "Nudged!" : "Nudge"}</p></div>
            </div>
        </div>
    )
}

export default Nudge;