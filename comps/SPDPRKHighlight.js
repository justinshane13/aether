import styles from '@/styles/Home.module.css'
import LearnMore from './LearnMore';
import Image from 'next/image';
import { motion } from 'framer-motion'

const SPDPRKHighlight = () => {
    return (
      <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: "0px 0px -100px 0px" }}
          transition={{ duration: .5 }}
      >
        <div className={styles.SPDPRKHighlight}>
          <div className={styles.SPDPRKHighlightText}>
            <p className={styles.SPDPRKHighlightTitle}>The best solution for your parking garage — period.</p>
            <div className={styles.SPDPRKUnderlineContainer}>
              <p className={`${styles.SPDPRKHighlightTitle} ${styles.underlineBackground}`}>This is SPDPRK.</p>
            </div>
          </div>
          <div className={styles.SPDPRKHighlightBottomSection}>
            <div className={styles.SPDPRKHighlightBottomSectionText}>
              <p className={styles.SPDPRKHighlightParagraph}>Customers using your parking garage should be in and out without hassle. SPDPRK technology makes the experience fast, seamless, and secure.</p>
              <p className={styles.SPDPRKHighlightParagraph}>We engineered SPDPRK technology to be highly customizable, while staying true to the core values we know to be important in any parking operation.</p>
              <LearnMore page="/spdprk"/>
            </div>
            <Image className={styles.SPDPRKHighlightImage} src="/iphone.svg" width={178} height={378} />
          </div>
        </div>
      </motion.div>
    );
}
 
export default SPDPRKHighlight;