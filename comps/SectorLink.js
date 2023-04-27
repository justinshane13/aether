import Link from "next/link";
import { useState } from 'react'
import styles from '@/styles/Home.module.css'

const SectorLink = ({ sector, sectorFull }) => {
    return (
        <Link className={styles.sectorLink} href={`/sectors/${sector.toLowerCase()}`}>{sectorFull}</Link>
    );
}
 
export default SectorLink;