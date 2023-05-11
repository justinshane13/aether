import Image from 'next/image'
import Link from 'next/link';
import styles from '@/styles/Home.module.css'
import { useState } from 'react'

const Navbar = () => {
    const [isExpanded, setIsExpanded] = useState(false)

    const handleClick = () => {
        setIsExpanded(!isExpanded)
    }

    return (
        <nav className={styles.navbar}>
            <Link className={styles.navLogoLink} href="/"><Image className={styles.navLogo} src="/spdprk_logo.svg" width={142} height={41} /></Link>
            <Image className={`${styles.hamburgerButton} ${isExpanded ? styles.hamburgerButtonRotated : ''}`} src="/hamburger.svg" width={30} height={30} onClick={handleClick} />
            <div className={`${styles.navbarCollapsible} ${isExpanded ? styles.expanded : ''}`}>
                <div className={styles.navLinksCollapsible}>
                    <Link className={styles.navLinkCollapsible} onClick={handleClick} href="/about">About</Link>
                    <Link className={styles.navLinkCollapsible} onClick={handleClick} href="/spdprk">SPDPRK</Link>
                    <Link className={styles.navLinkCollapsible} onClick={handleClick} href="/software">Software & Reports</Link>
                    <Link className={styles.navLinkCollapsible} onClick={handleClick} href="/sectors">Sectors</Link>
                    <Link className={styles.navLinkCollapsible} onClick={handleClick} href="/partners">Partners</Link>
                    <Link className={styles.navLinkCollapsible} onClick={handleClick} href="/faq">FAQ</Link>
                    <Link className={styles.navLinkCollapsible} onClick={handleClick} href="/contact">Contact</Link>
                </div>
            </div>
            <div className={styles.navLinks}>
                <Link className={styles.navLink} href="/about">About</Link>
                <Link className={styles.navLink} href="/spdprk">SPDPRK</Link>
                <Link className={styles.navLink} href="/software">Software & Reports</Link>
                <Link className={styles.navLink} href="/sectors">Sectors</Link>
                <Link className={styles.navLink} href="/partners">Partners</Link>
                <Link className={styles.navLink} href="/faq">FAQ</Link>
                <Link className={styles.navLink} href="/contact">Contact</Link>
            </div>
        </nav>
    );
}
 
export default Navbar