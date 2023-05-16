import Upgrade from '@/comps/Upgrade';
import styles from '@/styles/SPDPRK.module.css'
import Image from 'next/image';
import Head from 'next/head'

const SPDPRK = () => {
    return (
        <>
            <Head>
                <title>SPDPRK | SPDPRK</title>
                <meta name="keywords" content="SPDPRK" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <main>
                <div className={styles.SPDPRK}>
                    <div className={styles.SPDPRKSection1}>
                        <h1 className={styles.underlineBackground}>This is SPDPRK</h1>
                        <p>SPDPRK is the simplest, most effective way for parking customers to use your garage. We’ve combined first-class hardware with innovative software to create an excellent user experience. Your customers can scan their ticket and pay for parking using their phone for every step.</p>
                        <p>Fast, contactless payments have never been simpler because customers connect their ticket to their phone payment method. Quickly allow paying customers to enter and exit your parking facility easily through a QR code ticket dispenser and QR reader. Deep-dive into facility analytics by identifying low and peak volume periods on a hourly, daily, weekly, or monthly basis.</p>
                        <div>
                            <div className={styles.SPDPRKSection1Blue}>
                                <h2>Hardware & Software</h2>
                                <p>SPDPRK systems are designed to be Zero Obsolescent, requiring minimal maintenance and built on a secure and stable technology that is resistant to breakdowns. We utilize a cloud-based monitoring system along with an optional on site server to manage your location with an ethernet connection and power. </p>
                                <p>We designed the system to be a solution to the variety of challenges parking operations face. By adding SPDPRK to your parking asset, you can drastically reduce the footprint of your equipment. Below are some of the ways it can replace or enhance legacy equipment.</p>
                            </div>
                            <div className={styles.background1}></div>
                            <Image className={styles.greenHalfCircle} src="/green_half_circle.svg" width={50} height={100} />
                        </div>
                    </div>
                    <div className={styles.SPDPRKSectionStatistic}>
                        <h2>User Adoption Rates</h2>
                        <p>We ran the numbers, and customers love the convenience of SPDPRK. Over 25% of them scanned the QR code with their phone and paid online before the parking owners marketed the new system. That means despite no signage or prompting, they are taking the traditional Bar Code ticket and seeing the QR code added to it, scanning with their phone, and paying the bill with their phone without any instruction.</p>
                    </div>
                    <div className={styles.SPDPRKSection2}>
                        <div className={styles.SPDPRKSection2ExamplesContainer}>
                            <h2>Legacy to SPDPRK: Reduced Footprint</h2>
                            <div className={styles.SPDPRKSection2Example}>
                                <Image className={styles.SPDPRKSection2ExampleImage} src="/hardware.jpeg" width={300} height={300} />
                                <div className={styles.SPDPRKSection2ExampleText}>
                                    <h3>Pay On Foot System</h3>
                                    <p>With a pay on foot system, drivers can park their vehicles for a specific duration of time, and then pay the fee before leaving the parking lot. With SPDPRK that is accomplished on your phone.</p>
                                </div>
                            </div>
                            <div className={styles.SPDPRKSection2Example}>
                                <Image className={styles.SPDPRKSection2ExampleImage} src="/hardware.jpeg" width={300} height={300} />
                                <div className={styles.SPDPRKSection2ExampleText}>
                                    <h3>Ticket</h3>
                                    <p>Reduced Footprint of a bespoke SPDPRK system can be designed to eliminate tickets and of course Ticket Dispensers completely, utilizing alternative forms of transient credentials for entrance and exit of a parking facility.</p>
                                </div>
                            </div>
                            <div className={styles.SPDPRKSection2Example}>
                                <Image className={styles.SPDPRKSection2ExampleImage} src="/hardware.jpeg" width={300} height={300} />
                                <div className={styles.SPDPRKSection2ExampleText}>
                                    <h3>Ticket Dispenser</h3>
                                    <p>Even in the SPDPRK system, despite having alternative ticketless options to offer you, a faster throughput is often achieved by using the SPDPRK Ticket Dispenser. A SPDPRK Ticket Dispenser comes standard with a Customer Information Screen, a VOip intercom, a Pushbutton for tickets, Ticket Printer and is an all stainless steel construction for longevity and strength. </p>
                                </div>
                            </div>
                            <div className={styles.SPDPRKSection2Example}>
                                <Image className={styles.SPDPRKSection2ExampleImage} src="/hardware.jpeg" width={300} height={300} />
                                <div className={styles.SPDPRKSection2ExampleText}>
                                    <h3>Ticket Acceptor</h3>
                                    <p>Parking ticket acceptors are an important component of parking payment systems and its core functions can be replicated on the SPDPRK system. Once the fee has been calculated, the driver can pay using various payment methods, credit/debit card, or mobile payment. If the driver loses their ticket or exceeds the time limit of their parking session, the acceptor may charge a higher fee through the SPDPRK system.</p>
                                </div>
                            </div>
                            <div className={styles.SPDPRKSection2Example}>
                                <Image className={styles.SPDPRKSection2ExampleImage} src="/hardware.jpeg" width={300} height={300} />
                                <div className={styles.SPDPRKSection2ExampleText}>
                                    <h3>Validator</h3>
                                    <p>SPDPRK makes it all so easy, validations are done on the customer phone or sent by the system automatically to the recipient for entrance or exit by an authorized user. Efficient design with one or multiple solutions to fit your needs.</p>
                                </div>
                            </div>
                            <div className={styles.SPDPRKSection2Example}>
                                <Image className={styles.SPDPRKSection2ExampleImage} src="/hardware.jpeg" width={300} height={300} />
                                <div className={styles.SPDPRKSection2ExampleText}>
                                    <h3>Card Reader</h3>
                                    <p>SPDPRK can eliminate the need for contractor credentials to License plate recognition, biometrics or a customers own phone via bluetooth or automated QR code sent to them.</p>
                                </div>
                            </div>
                            <div className={styles.SPDPRKSection2Example}>
                                <Image className={styles.SPDPRKSection2ExampleImage} src="/hardware.jpeg" width={300} height={300} />
                                <div className={styles.SPDPRKSection2ExampleText}>
                                    <h3>Cashier Terminal</h3>
                                    <p>SPDPRK can reduce the equipment footprint or human resource allocation of a cashier to those that still see the value in the personal touch of having people dealing with people in the parking process.</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.background7}></div>
                    </div>
                    <div className={styles.SPDPRKSection3}>
                        <h2>Highlights of using SPDPRK</h2>
                        <div className={styles.SPDPRKSection3Benefits}>
                            <div>
                                <Image className={styles.SPDPRKSection3Icon} src="/install.svg" width={60} height={60} />
                                <p>Fast & easy installation</p>
                            </div>
                            <div>
                                <Image className={styles.SPDPRKSection3Icon} src="/reduced.svg" width={60} height={60} />
                                <p>Reduced footprint</p>
                            </div>
                            <div>
                                <Image className={styles.SPDPRKSection3Icon} src="/payments.svg" width={60} height={60} />
                                <p>Flexible payment systems</p>
                            </div>
                            <div>
                                <Image className={styles.SPDPRKSection3Icon} src="/puzzle.svg" width={60} height={60} />
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
                                <div className={styles.SPDPRKSection4ImageContainer}>
                                    <Image className={styles.SPDPRKSection4Image} src="/hand_crafted.jpg" width={300} height={300} />
                                </div>
                                <div className={styles.SPDPRKSection4ImageContainer}>
                                    <Image className={styles.SPDPRKSection4Image} src="/hardware.jpeg" width={300} height={300} />
                                </div>
                                <div className={styles.SPDPRKSection4ImageContainer}>
                                    <Image className={styles.SPDPRKSection4Image} src="/family.jpg" width={300} height={300} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <Upgrade />
                </div>
            </main>
        </>
    );
}
 
export default SPDPRK;