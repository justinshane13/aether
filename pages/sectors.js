import styles from '@/styles/Sectors.module.css'
import Banner from '@/comps/Banner';
import SectorsLinks from '@/comps/SectorsLinks';

const Sectors = () => {
    return (
        <div className={styles.sectors}>
            <h1>Sectors</h1>
            <Banner />
            <SectorsLinks />
        </div>
    );
}
 
export default Sectors;