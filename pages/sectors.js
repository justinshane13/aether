import styles from '@/styles/Sectors.module.css'
import Banner from '@/comps/Banner';
import SectorsLinks from '@/comps/SectorsLinks';
import Upgrade from '@/comps/Upgrade';

const Sectors = () => {
    return (
        <div className={styles.sectors}>
            <h1>Sectors</h1>
            <Banner />
            <SectorsLinks />
            <Upgrade />
        </div>
    );
}
 
export default Sectors;