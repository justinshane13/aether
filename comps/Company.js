import styles from '@/styles/Home.module.css'
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion'

const Company = () => {
    return (
        <div className={styles.companyBackgroundContainer}>
            <div className={styles.company}>
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ margin: "0px 0px -100px 0px" }}
                    transition={{ duration: .5 }}
                >
                    <div className={styles.companyText}>
                        <p className={styles.companyTitle}>A company you can trust</p>
                        <p className={styles.companyParagraph}>We have over four decades of experience in the parking industry. We apply that knowledge to today’s challenges to find creative solutions that work. We know that your organization is unique, and we are committed to building a product that is exactly what you need.</p>
                    </div>
                    <Link className={styles.companyLink} href="/about">Learn More</Link>
                </motion.div>
                <div className={styles.companyPhotoGrid}>
                    <div className={styles.companyPhoto1}>
                        <Image className={styles.companyPhoto} src="/experienced.jpg" width={100} height={100} unoptimized />
                        <div className={styles.companyPhotoTextContainer}>
                            <p className={styles.companyPhotoText}>Over forty-five years experience in the parking industry</p>
                        </div>
                        <div className={styles.companyPhotoOverlay}></div>
                    </div>
                    <div className={styles.companyPhoto2}>
                        <Image className={styles.companyPhoto} src="/family.jpg" width={100} height={100} unoptimized />
                        <div className={styles.companyPhotoTextContainer}>
                            <p className={styles.companyPhotoText}>Family-owned and operated since our inception</p>
                        </div>
                        <div className={styles.companyPhotoOverlay}></div>
                    </div>
                    <div className={styles.companyPhoto3}>
                        <Image className={styles.companyPhoto} src="/los_angeles.jpg" width={100} height={100} unoptimized />
                        <div className={styles.companyPhotoTextContainer}>
                            <p className={styles.companyPhotoText}>All hardware and software built in our Los Angeles factory</p>
                        </div>
                        <div className={styles.companyPhotoOverlay}></div>
                    </div>
                    <div className={styles.companyPhoto4}>
                        <Image className={styles.companyPhoto} src="/hand_crafted.jpg" width={100} height={100} unoptimized />
                        <div className={styles.companyPhotoTextContainer}>
                            <p className={styles.companyPhotoText}>Each piece assembled by hand with excellent craftsmanship</p>
                        </div>
                        <div className={styles.companyPhotoOverlay}></div>
                    </div>
                    <div className={styles.companyPhoto5}>
                        <Image className={styles.companyPhoto} src="/customer.jpg" width={100} height={100} unoptimized />
                        <div className={styles.companyPhotoTextContainer}>
                            <p className={styles.companyPhotoText}>No call centers — you have direct contact to our support team</p>
                        </div>
                        <div className={styles.companyPhotoOverlay}></div>
                    </div>
                    <Image className={styles.dots} src="/dot_shape.png" width={200} height={200} />
                </div>
                <div className={styles.background4}></div>
                <div className={styles.background5}></div>
                <div className={styles.background6}></div>
            </div>
        </div>
    );
}
 
export default Company;