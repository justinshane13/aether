import styles from '../styles/Competition.module.css'
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head'
import Navbar from '../comps/Navbar';

const Competition = () => {
    return (
        <>
            <Head>
                <title>Aether | Competition</title>
                <meta name="keywords" content="competition" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <main className={styles.main}>
                <div className={styles.competitionContainer}>
                    <Navbar />
                    <h1 className={styles.heading}>Competition</h1>
                    <h1 className={styles.greeting}>Leader Board</h1>
                    <p className={styles.subline}>How do you stack up against<br/> your peers?</p>
                    <div className={styles.rowsHeader}>
                        <p className={styles.rankHeader}>Rank</p>
                        <p className={styles.userHeader}>User</p>
                        <p className={styles.streakHeader}>Streak</p>
                    </div>
                    <RankingRow rank="1" image={<Image className={styles.medal} src="/gold.png" alt="gold medal" width={20} height={20} />} user={"PixelPioneer92"} streakLength="104" />
                    <RankingRow rank="2" image={<Image className={styles.medal} src="/silver.png" alt="silver medal" width={20} height={20} />} user="WanderlustDreamer" streakLength="99" />
                    <RankingRow rank="3" image={<Image className={styles.medal} src="/bronze.png" alt="bronze medal" width={20} height={20} />} user="TechSavvyExplorer" streakLength="98" />
                    <RankingRow rank="4" image={null} user="MidnightWhisperer" streakLength="85" />
                    <RankingRow rank="5" image={null} user="SereneSeeker99" streakLength="83" />
                    <RankingRow rank="6" image={null} user="CosmicVoyager123" streakLength="83" />
                    <RankingRow rank="7" image={null} user="QuantumJourneyer" streakLength="60" />
                    <RankingRow rank="8" image={null} user="MysticEcho87" streakLength="58" />
                    <RankingRow rank="9" image={null} user="NovaNomad2023" streakLength="45" />
                    <RankingRow rank="10" image={null} user="CyberZenMaster" streakLength="40" />
                    <RankingRow rank="11" image={null} user="DreamWeaverEternal" streakLength="38" />
                </div>
            </main>
        </>
    );
}

const RankingRow = ({rank, image, user, streakLength}) => {
    return (
        <div>
            <div className={styles.rankContainer}>
                <p className={styles.rank}>{rank}</p>
                <p className={styles.user}>{image && image}{user}</p>
                <p className={styles.streak}>{streakLength}</p>
            </div>
            <div className={styles.dividingLine}></div>
        </div>
    )
}
 
export default Competition;