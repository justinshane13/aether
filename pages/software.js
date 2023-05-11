import styles from '@/styles/Software.module.css'
import Head from 'next/head'

const Software = () => {
    return (
        <>
            <Head>
                <title>SPDPRK | Software</title>
                <meta name="keywords" content="software" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <main>
                <div className={styles.software}>
                    <div className={styles.softwareSection1}>
                        <h1>Software & Reports</h1>
                    </div>
                </div>
            </main>
        </>
    );
}
 
export default Software;