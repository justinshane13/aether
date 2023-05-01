import Image from 'next/image'
import Link from 'next/link';
import styles from '@/styles/Home.module.css'

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <Link className={styles.navLogoLink} href="/"><Image className={styles.navLogo} src="/spdprk_logo.svg" width={142} height={41} /></Link>
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