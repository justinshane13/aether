import styles from '@/styles/Home.module.css'
import Link from 'next/link';

const Upgrade = () => {
    return (
        <div className={styles.upgrade}>
            <div className={styles.upgradeText}>
                <p className={styles.upgradeTitle}>Ready to upgrade?</p>
                <p className={styles.upgradeParagraph}>Connect with our Solutions team today to schedule a demo.</p>
                <Link className={styles.companyLink} href="/contact">Request a Demo</Link>
            </div>
        </div>
    );
}
 
export default Upgrade;