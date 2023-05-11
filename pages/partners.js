import styles from '@/styles/Partners.module.css'
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head'

const Partners = () => {
    return (
        <>
            <Head>
                <title>SPDPRK | Partners</title>
                <meta name="keywords" content="partners" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <main>
                <div className={styles.partners}>
                    <div className={styles.partnersSection1}>
                        <h1>Partners</h1>
                        <p>We understand the parking industry, inside and out. We know your clients have specific needs, and cookie-cutter products won't cut it. By partnering with us, you will ensure you can offer the best possible solutions to your customers.</p>
                        <p><strong>Customers</strong>: If you are already working with someone to oversee and maintain your parking equipment, that's not a problem — we can train anyone to use our system. We can add SPDPRK technology to your operation and will work closely with your existing partner. We are not proprietary, which means we'll make sure they have the tools and information they need to maintain your equipment.</p>
                    </div>
                    <div className={styles.partnersSection2Container}>
                        <div className={styles.partnersSection2}>
                            <div>
                                <Image className={styles.partnersFlag} src="/flag.svg" width={80} height={80} />
                                <h2>We are based in the USA</h2>
                                <p>You can reach us right away — no call centers. We understand the value of getting real answers, fast. No matter the issue you need addressed, we will be available to help you.</p>
                                <p>All of our team, from hardware and manufacturing to software and support, are based in the continental United States.</p>
                            </div>
                            <div>
                                <Image src="/clipboard.svg" width={80} height={80} />
                                <h2>Our solutions are comprehensive</h2>
                                <p>In any parking operation, there is a symphony of moving parts to make it a success. When creating a bespoke solution for each customer, we account for every variable.</p>
                                <p>Instead of going to dozens of providers to mix and match hardware and software, we provide a total solution that works out of the box.</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.partnersSection3}>
                        <Image className={styles.partnersSection3Image} src="/headshot.jpg" width={150} height={150} />
                        <div>
                            <p className={styles.partnersSection3Quote}>“We started working with Secom on custom solutions for our customers and never looked back. They make our job easier and if they offer us a solution, I just know that it will work — simple as that.”</p>
                            <div>
                                <Image className={styles.partnersStar} src="/star.svg" width={20} height={20}/>
                                <Image className={styles.partnersStar} src="/star.svg" width={20} height={20}/>
                                <Image className={styles.partnersStar} src="/star.svg" width={20} height={20}/>
                                <Image className={styles.partnersStar} src="/star.svg" width={20} height={20}/>
                                <Image className={styles.partnersStar} src="/star.svg" width={20} height={20}/>
                            </div>
                            <p className={styles.partnersSection3Customer}>Don White</p>
                            <p className={styles.partnersSection3Company}>Owner at William D. White Co.</p>
                        </div>
                    </div>
                    <div className={styles.partnersSection4}>
                        <h2>Grow your business by partnering with us</h2>
                        <p>Let’s work together to find creative solutions for your customers</p>
                        <Link className={styles.partnersContactLink} href="/contact">Contact us</Link>
                    </div>
                </div>
            </main>
        </>
    );
}
 
export default Partners;