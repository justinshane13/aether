import SectorLink from "./SectorLink";
import styles from '@/styles/Home.module.css'
import { motion } from 'framer-motion'

const SectorsLinks = () => {
    return (
        <div className={styles.sectorsHighlight}>
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: "0px 0px -100px 0px" }}
                transition={{ duration: .5 }}
            >
                <div className={styles.sectorsText}>
                    <p className={styles.sectorsTitle}>Bespoke solutions for every sector</p>
                    <p className={styles.sectorsParagraph}>Each organization brings something different to the table. We design our equipment and service to meet the specific needs of every sector that needs parking equipment.</p>
                    <div className={styles.background3}></div>
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: "0px 0px -100px 0px" }}
                transition={{ duration: .5 }}
            >
                <div className={styles.sectorsGrid}>
                    <SectorLink sector="airport" sectorFull="Airport & Off-Airport" />
                    <SectorLink sector="corporate" sectorFull="Corporate Offices & Business Parks" />
                    <SectorLink sector="government" sectorFull="Government & Public Institutions" />
                    <SectorLink sector="hospital" sectorFull="Hospitals" />
                    <SectorLink sector="hotel" sectorFull="Hotels" />
                    <SectorLink sector="residential" sectorFull="Residential Complexes" />
                    <SectorLink sector="restaurant" sectorFull="Restaurants, Bars, Nightclubs, Casinos" />
                    <SectorLink sector="shopping" sectorFull="Shopping Centers & Malls" />
                    <SectorLink sector="sports" sectorFull="Sports Venues & Arenas" />
                </div>
            </motion.div>
            <div className={styles.background3}></div>
        </div>
    );
}
 
export default SectorsLinks;