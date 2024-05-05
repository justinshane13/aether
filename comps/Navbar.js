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
            <Link className={styles.navLogoLink} href="/"><Image className={styles.navLogo} src="/aether-logo.PNG" width={50} height={50} /></Link>
            <Image className={styles.notificationBell} src="/notification.png" width={30} height={30} onClick={handleClick} />
        </nav>
    );
}
 
export default Navbar