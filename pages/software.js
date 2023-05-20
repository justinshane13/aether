import styles from '@/styles/Software.module.css'
import Head from 'next/head'
import Upgrade from '@/comps/Upgrade';

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
                        <p>Innovation is at the center of who we are. The only way to stick around for 45+ years in the same industry is to find new, creative solutions to our customers' problems. Software plays a large part in reaching that goal.</p>
                        <p>Every parking operation is unique, which is why we provide customizable tools for every step of the process.</p>
                    </div>
                </div>
                <Upgrade />
            </main>
        </>
    );
}
 
export default Software;