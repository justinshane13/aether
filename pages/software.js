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
                        <div>
                            <div>
                                <p>Innovation is at the center of who we are. We know that your, creative solutions to our customers' problems. Software plays a vital part in reaching that goal.</p>
                                <p>Every parking operation is unique, which is why we provide customizable tools for every step of the process.</p>
                            </div>
                            <div className={styles.softwareVideoContainer} dangerouslySetInnerHTML={{ __html: `
                                <video
                                loop
                                muted
                                autoplay
                                playsinline
                                src="/software_mp4.mp4"
                                class="${styles.softwareVideo}"
                                />,
                            ` }}></div>
                        </div>
                    </div>
                </div>
                <Upgrade />
            </main>
        </>
    );
}
 
export default Software;