import styles from '@/styles/Partners.module.css'
import Image from 'next/image';
import Link from 'next/link';
import Fade from 'react-reveal/Fade'

const Partners = () => {
    return (
        <div className={styles.partners}>
            <Fade bottom>
                <div className={styles.partnersSection1}>
                    <h1>Partners</h1>
                    <p>We understand the parking industry, inside and out. We know your customers have specific needs that will make or break your deal with them. Here is why you can be confident if you partner with us to provide Secom equipment to your customers.</p>
                </div>
                <div className={styles.partnersSection2Container}>
                    <div className={styles.partnersSection2}>
                        <div>
                            <Image src="/family_owned.jpg" width={80} height={80} />
                            <h2>We are based in the USA</h2>
                            <p>You can reach us right away - no call centers. No matter the issue you need addressed, we will be available to help you.</p>
                        </div>
                        <div>
                            <Image src="/family_owned.jpg" width={80} height={80} />
                            <h2>We are a one-stop-shop</h2>
                            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                        <div>
                            <Image src="/family_owned.jpg" width={80} height={80} />
                            <h2>Here is reason #3</h2>
                            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                        <div>
                            <Image src="/family_owned.jpg" width={80} height={80} />
                            <h2>Here is reason #4</h2>
                            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                </div>
                <div className={styles.partnersSection3}>
                    <Image className={styles.partnersSection3Image} src="/fall_road.jpg" width={150} height={150} />
                    <div>
                        <p className={styles.partnersSection3Quote}>“Before we partnered with Secom, we spent way too much time hunting down solutions for our customers. Now whenever a customer bring us a unique challenge, I know I can count on Secom’s team to find a creative way to solve it.”</p>
                        <p className={styles.partnersSection3Customer}>Michael Donaldson</p>
                        <p className={styles.partnersSection3Company}>Owner at Parking Supplies Corporation</p>
                    </div>
                </div>
                <div className={styles.partnersSection4}>
                    <h2>Grow your business by partnering with us</h2>
                    <p>Let’s work together to find creative solutions for your customers</p>
                    <Link className={styles.partnersContactLink} href="/contact">Contact us</Link>
                </div>
            </Fade>
        </div>
    );
}
 
export default Partners;