import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'

const LearnMore = () => {
    const [isHovered, setIsHovered] = useState(false)

    const trigger = () => {
        setIsHovered(!isHovered)
    }

    return (
        <Link className={styles.SPDPRKHighlightLink} href="/spdprk" onMouseEnter={trigger} onMouseLeave={trigger}>Learn More<Image className={`${styles.arrowRight} ${isHovered ? styles.slideRight : ''}`} src="/arrow_right.png" width={24} height={24} /></Link>
    );
}
 
export default LearnMore;