import styles from '../styles/History.module.css'
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head'
import Navbar from '../comps/Navbar';

const History = () => {
    return (
        <>
            <Head>
                <title>Aether | History</title>
                <meta name="keywords" content="history" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <main className={styles.main}>
                <div className={styles.historyContainer}>
                    <Navbar />
                    <h1 className={styles.heading}>History</h1>
                    <h1 className={styles.greeting}>Your current streak is 8 days</h1>
                    <p className={styles.subline}>Only 4 more days to set<br/> a personal best!</p>
                    <div className={styles.rowsHeader}>
                        <p>Date</p>
                        <p>Goal Met</p>
                    </div>
                    <HistoryRow date="April 13, 2024" metGoal={true} />
                    <HistoryRow date="April 12, 2024" metGoal={true} />
                    <HistoryRow date="April 11, 2024" metGoal={true} />
                    <HistoryRow date="April 10, 2024" metGoal={true} />
                    <HistoryRow date="April 9, 2024" metGoal={true} />
                    <HistoryRow date="April 8, 2024" metGoal={true} />
                    <HistoryRow date="April 7, 2024" metGoal={true} />
                    <HistoryRow date="April 6, 2024" metGoal={true} />
                    <HistoryRow date="April 5, 2024" metGoal={false} />
                    <HistoryRow date="April 4, 2024" metGoal={true} />
                    <HistoryRow date="April 3, 2024" metGoal={false} />
                    <HistoryRow date="April 2, 2024" metGoal={true} />
                    <HistoryRow date="April 1, 2024" metGoal={true} />
                    <HistoryRow date="March 31, 2024" metGoal={true} />
                    <HistoryRow date="March 30, 2024" metGoal={true} />
                    <HistoryRow date="March 29, 2024" metGoal={true} />
                    <HistoryRow date="March 28, 2024" metGoal={true} />
                    <HistoryRow date="March 27, 2024" metGoal={true} />
                    <HistoryRow date="March 26, 2024" metGoal={true} />
                    <HistoryRow date="March 25, 2024" metGoal={true} />
                    <HistoryRow date="March 24, 2024" metGoal={true} />
                    <HistoryRow date="March 23, 2024" metGoal={true} />
                    <HistoryRow date="March 22, 2024" metGoal={false} />
                    <HistoryRow date="March 21, 2024" metGoal={true} />
                    <HistoryRow date="March 20, 2024" metGoal={false} />
                    <HistoryRow date="March 19, 2024" metGoal={true} />
                    <HistoryRow date="March 18, 2024" metGoal={true} />
                    <HistoryRow date="March 17, 2024" metGoal={true} />
                    <HistoryRow date="March 16, 2024" metGoal={true} />
                    <HistoryRow date="March 15, 2024" metGoal={true} />
                    <HistoryRow date="March 14, 2024" metGoal={false} />
                </div>
            </main>
        </>
    );
}

const HistoryRow = ({date, metGoal}) => {
    return (
        <div>
            <div className={styles.dateContainer}>
                <p className={styles.date}>{date}</p>
                <Image className={styles.statusIcon} src={metGoal ? "/check.png" : "/cancel.png"} alt="status icon" width={25} height={25} />
            </div>
            <div className={styles.dividingLine}></div>
        </div>
    )
}
 
export default History;