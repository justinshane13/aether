import styles from '@/styles/Home.module.css'
import Image from 'next/image';

const Banner = () => {
    return (
        <div>
            <div className={styles.banner}>
                <div className={styles.bannerImageContainer}>
                    <Image className={styles.bannerImage}src="/full_lot.jpg" width={639} height={359} unoptimized />
                </div>
                <div className={styles.bannerImageContainer}>
                    <Image className={styles.bannerImage}src="/fall_road.jpg" width={640} height={360} unoptimized />
                </div>
                <div className={styles.bannerImageContainer}>
                    <Image className={styles.bannerImage}src="/entrance_beverly_hills.jpg" width={640} height={960} unoptimized />
                </div>
                <div className={styles.bannerText}>
                    <p>We’ve been trusted across numerous sectors over our 45 years in the parking industry</p>
                </div>
            </div>
        </div>
    );
}
 
export default Banner;