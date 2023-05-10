import Link from "next/link";
import Image from "next/image";
import styles from '@/styles/Home.module.css'

const Hero = () => {
    return (
        <div className={styles.hero}>
            <div className={styles.heroText}>
                <p className={styles.heroTitle}>Parking solutions — done right.</p>
                <p className={styles.heroParagraph}>SPDPRK is designed and built to make the parking process fast, straight-forward, and secure. Both hardware and software ensure that your customers have a seamless experience, and that you are in control of what’s happening in your garage.</p>
                <Link className={styles.heroLink} href="/contact">Request a Demo</Link>
            </div>
            <div className={styles.heroVideoContainer}>
                <video className={styles.heroVideo} autoPlay muted loop>
                    <source src="/hero_mp4.mp4" type="video/mp4"></source>
                </video>
            </div>
        </div>
    );
}
 
export default Hero;