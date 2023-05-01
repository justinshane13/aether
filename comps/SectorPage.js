import styles from '@/styles/SectorPage.module.css'
import Image from 'next/image';
import Upgrade from './Upgrade';

const SectorPage = ({ name, description, image, characteristics }) => {
    return (
        <div className={styles.sectorPage}>
            <div className={styles.sectorPageSection1}>
                <h1>{name}</h1>
                <div>
                    <div>
                        {description.map(p => <p className={styles.sectorParagraph}>{p}</p>)}
                    </div>
                    <Image className={styles.sectorPageSection1Image} src={image} width={600} height={600} unoptimized/>
                </div>
            </div>
            <div className={styles.sectorPageSection2}>
                <p>{name}</p>
                <h2>Key Characteristics</h2>
                <div>
                    {characteristics.map(c => {
                        return (
                            <div className={styles.sectorPageSection2Tile}>
                                <Image src={c.image} width={100} height={100} />
                                <p>{c.text}</p>
                            </div>
                        )
                        })}
                </div>
            </div>
            <Upgrade />
        </div>
    );
}

export default SectorPage;