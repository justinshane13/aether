import Upgrade from '@/comps/Upgrade';
import styles from '@/styles/SPDPRK.module.css'
import Image from 'next/image';
import Fade from 'react-reveal/Fade'

const SPDPRK = () => {
    return (
        <div className={styles.SPDPRK}>
            <Fade bottom>
                <div className={styles.SPDPRKSection1}>
                    <h1 className={styles.underlineBackground}>This is SPDPRK</h1>
                    <p>SPDPRK is the simplest, most effective way for parking customers to use your garage. We’ve combined first-class hardware with innovative software to create an excellent user experience. Your customers can scan their ticket and pay for parking using their phone for every step.</p>
                </div>
                <div className={styles.SPDPRKSection2}>
                    <h2>SPDPRK can adapt to your organization’s unique requirements. Here are some examples:</h2>
                    <div>
                        <div className={styles.SPDPRKSection2ExampleText}>
                            <h3>Use Case #1 — Lorem Ipsum</h3>
                            <p>When a customer enters your garage, they get a ticket from the ticket dispenser. The ticket has a QR code.</p>
                        </div>
                        <Image className={styles.SPDPRKSection2Image} src="/hand_crafted.jpg" width={200} height={200} />
                    </div>
                    <div>
                        <div className={styles.SPDPRKSection2ExampleText}>
                            <h3>Use Case #2 — Lorem Ipsum</h3>
                            <p>WBefore the customer leaves the garage, they scan the QR code with their phone. This opens a payment portal with their balance due and the customer pays with credit card, Apple Pay, Google Pay, or Samsung Pay.</p>
                        </div>
                        <Image className={styles.SPDPRKSection2Image} src="/hand_crafted.jpg" width={200} height={200} />
                    </div>
                    <div>
                        <div className={styles.SPDPRKSection2ExampleText}>
                            <h3>Use Case #3 — Lorem Ipsum</h3>
                            <p>After paying on their phone, the customer leaves the garage by scanning the QR code at the exit gate.</p>
                        </div>
                        <Image className={styles.SPDPRKSection2Image} src="/hand_crafted.jpg" width={200} height={200} />
                    </div>
                    <div>
                        <div className={styles.SPDPRKSection2ExampleText}>
                            <h3>Use Case #4 — Lorem Ipsum</h3>
                            <p>After paying on their phone, the customer leaves the garage by scanning the QR code at the exit gate.</p>
                        </div>
                        <Image className={styles.SPDPRKSection2Image} src="/hand_crafted.jpg" width={200} height={200} />
                    </div>
                </div>
                <div className={styles.SPDPRKSection3}>
                    <h2>Highlights of using SPDPRK</h2>
                    <div className={styles.SPDPRKSection3Benefits}>
                        <div>
                            <Image src="/fall_road.jpg" width={100} height={100} />
                            <p>Fast & easy installation</p>
                        </div>
                        <div>
                            <Image src="/fall_road.jpg" width={100} height={100} />
                            <p>Reduced footprint</p>
                        </div>
                        <div>
                            <Image src="/fall_road.jpg" width={100} height={100} />
                            <p>Flexible payment systems</p>
                        </div>
                        <div>
                            <Image src="/fall_road.jpg" width={100} height={100} />
                            <p>Integrates with existing equipment</p>
                        </div>
                    </div>
                </div>
                <div className={styles.SPDPRKSection4}>
                    <div className={styles.SPDPRKSection4Text}>
                        <h2>What if I already have equipment installed?</h2>
                        <div>
                            <p>If you have legacy Secom equipment in your parking garage, it’s fast and straightforward to add SPDPRK technology. It will seamlessly integrate into your existing equipment.</p>
                            <p>Contact us today to learn how you can make SPDPRK available to your customers.</p>
                        </div>
                    </div>
                    <div className={styles.SPDPRKSection4ImagesContainer}>
                        <div className={styles.SPDPRKSection4Images}>
                            <Image className={styles.SPDPRKSection4Image} src="/hand_crafted.jpg" width={300} height={300} />
                            <Image className={styles.SPDPRKSection4Image} src="/customer.jpg" width={300} height={300} />
                            <Image className={styles.SPDPRKSection4Image} src="/family.jpg" width={300} height={300} />
                        </div>
                    </div>
                </div>
                <Upgrade />
            </Fade>
        </div>
    );
}
 
export default SPDPRK;