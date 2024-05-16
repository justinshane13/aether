import styles from '../styles/Home.module.css'
import Link from 'next/link';

const Footer = () => {
    return (
        <div>
            <footer className={styles.footer}>
                <p className={styles.footerCopyright}>&copy; Copyright 2024. All Rights Reserved.</p>
            </footer>
        </div>
    );
}
 
export default Footer;