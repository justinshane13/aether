import Head from "next/head";
import styles from "@/styles/About.module.css"
import Image from "next/image";
import Fade from 'react-reveal/Fade'

const About = () => {
    return (
        <>
            <Head>
                <title>SPDPRK | About</title>
                <meta name="keywords" content="about" />
            </Head>
            <main>
                <div className={styles.about}>
                    <Fade bottom>
                        <div className={styles.aboutSection1}>
                            <h1>How are we different?</h1>
                            <p>We were one of the first companies to introduce a computer into the parking industry. Despite skepticism from others in the industry, we were committed to creating the best possible parking solution on the market. We know that innovation and creativity are not only relevant in our industry, but necessary.</p>
                            <p>A favorite part of our work is tackling the complex challenges our customers face. We are only satisfied when we find a solution that works perfect for you. Work with our local partner or choose one of your own that you already enjoy — we can work with anyone. Here are some reasons you’ll be happy you chose our products.</p>
                        </div>
                        <div className={styles.aboutSection2}>
                            <h2 className={styles.underlineBackground}>We are focused on creating the highest quality user experience</h2>
                            <div>
                                <div className={styles.aboutSection2GridElement}>
                                    <Image src="/fall_road.png" width={30} height={30} />
                                    <p>Keep your local partner, we work with anyone</p>
                                </div>
                                <div className={styles.aboutSection2GridElement}>
                                    <Image src="/fall_road.png" width={30} height={30} />
                                    <p>Get your customers in, out, and on with their lives</p>
                                </div>
                                <div className={styles.aboutSection2GridElement}>
                                    <Image src="/fall_road.png" width={30} height={30} />
                                    <p>Set up flexible payment systems that work for you</p>
                                </div>
                                <div className={styles.aboutSection2GridElement}>
                                    <Image src="/fall_road.png" width={30} height={30} />
                                    <p>Speak with a real person — our support staff are all in the USA</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.aboutSection3}>
                            <Image className={styles.aboutSectionImage} src="/hand_crafted.jpg" width={400} height={400} />
                            <div className={styles.aboutSection3Text}>
                                <h2>Our equipment must meet a standard of excellence</h2>
                                <ul>
                                    <li>We use durable, long-lasting stainless steel</li>
                                    <li>All configurations are made-to-order because we know every organization is different</li>
                                    <li>Each piece of equipment is made in our Gardena CA warehouse to ensure the quality of every order</li>
                                    <li>Pieces are assembled by hand with first-class attention to detail</li>
                                </ul>
                            </div>
                            <div className={styles.background7}></div>
                        </div>
                        <div className={styles.aboutSection4}>
                            <h2>In addition to a high-quality product, you get peace of mind</h2>
                            <p>Requirements change as needs and technology evolve. Secom offers long-term solutions for your investment. We have a built-in upgrade path for all systems, advanced replacement and a zero obsolescence policy on everything we produce for the life of the system.</p>
                            <p>Secom's audit trail is unsurpassed. Reporting of all lane activities are stored on a secure server for review. All events are recorded, from video and buttons pushed to equipment action, nothing is omitted or neglected, so you are always know what happens in your garage.</p>
                        </div>
                    </Fade>
                </div>
            </main>
        </>
    );
}
 
export default About;