import styles from '@/styles/Home.module.css'
import LearnMore from './LearnMore';
import Image from 'next/image';

const SPDPRKHighlight = () => {
    return (
        <div className={styles.SPDPRKHighlight}>
          <div className={styles.SPDPRKHighlightText}>
            <p className={styles.SPDPRKHighlightTitle}>The best solution for your parking garage — full stop.</p>
            <div className={styles.SPDPRKUnderlineContainer}>
              <p className={`${styles.SPDPRKHighlightTitle} ${styles.underlineBackground}`}>This is SPDPRK.</p>
            </div>
            <p className={styles.SPDPRKHighlightParagraph}>Customers using your parking garage should be in and out without hassle. SPDPRK technology makes the experience fast, seamless, and secure.</p>
            <p className={styles.SPDPRKHighlightParagraph}>We engineered SPDPRK technology to be highly customizable, while staying true to the core values we know to be important in any parking operation.</p>
            <LearnMore page="/spdprk"/>
          </div>
          <Image className={styles.SPDPRKHighlightImage} src="/iphone.png" width={237} height={503} />
        </div>
    );
}
 
export default SPDPRKHighlight;