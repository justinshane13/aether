import Link from "next/link";
import { useState } from 'react'
import styles from '@/styles/Home.module.css'

const SectorLink = ({ sector, sectorFull }) => {
    const [isHovered, setIsHovered] = useState(false)

    const trigger = () => {
        setIsHovered(!isHovered)
    }

    return (
        <Link className={`${styles.sectorLink} ${isHovered ? styles.slideUp : ''}`} href={`/sectors/${sector.toLowerCase()}`} onMouseEnter={trigger} onMouseLeave={trigger}>{sectorFull}</Link>
    );
}
 
export default SectorLink;