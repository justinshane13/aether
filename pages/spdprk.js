import Upgrade from '@/comps/Upgrade';
import styles from '@/styles/SPDPRK.module.css'
import Image from 'next/image';

const SPDPRK = () => {
    return (
        <div className={styles.SPDPRK}>
            <div className={styles.SPDPRKSection1}>
                <h1 className={styles.underlineBackground}>This is SPDPRK</h1>
                <p>SPDPRK is the simplest, most effective way for parking customers to use your garage. We’ve combined first-class hardware with innovative software to create an excellent user experience. Your customers can scan their ticket and pay for parking using their phone for every step.</p>
                <p>Fast, contactless payments have never been simpler because customers connect their ticket to their phone payment method. Quickly allow paying customers to enter and exit your parking facility easily through a QR code ticket dispenser and QR reader. Deep-dive into facility analytics by identifying low and peak volume periods on a hourly, daily, weekly, or monthly basis.</p>
            </div>
            <div className={styles.SPDPRKSection2}>
                <h2>Hardware & Software</h2>
                <p>SPDPRK systems are designed to be Zero Obsolescent, requiring minimal maintenance and built on a secure and stable technology that is resistant to breakdowns. We utilize a cloud-based monitoring system along with an optional on site server to manage your location with an ethernet connection and power. </p>
                <p>We designed the system to be a solution to the variety of challenges parking operations face. By adding SPDPRK to your parking asset, you can drastically reduce the footprint of your equipment. Here are some of the ways it can replace or enhance legacy equipment.</p>
                <div className={styles.SPDPRKSection2ExamplesContainer}>
                    <h2>Legacy to SPDPRK: Reduced Footprint</h2>
                    <div className={styles.SPDPRKSection2Example}>
                        <h3>Pay On Foot System</h3>
                        <p>A parking pay on foot system is a type of parking payment system where drivers park their vehicles in a designated area and then proceed to a payment kiosk, also known as a pay station or a pay on foot machine, to pay for their parking before exiting the parking facility.</p>
                        <p>With a pay on foot system, drivers can park their vehicles for a specific duration of time, and then pay the fee before leaving the parking lot. With SPDPRK that is accomplished on your phone.</p>
                    </div>
                    <div className={styles.SPDPRKSection2Example}>
                        <h3>Ticket</h3>
                        <p>A parking ticket is typically issued by a parking facility to a driver who enters the facility and parks their vehicle. The ticket serves as a record of the driver's entry time and provides them with information on how to pay for their parking when they leave.</p>
                        <p>Reduced Footprint of a bespoke SPDPRK system can be designed to eliminate tickets and of course Ticket Dispensers completely, utilizing alternative forms of transient credentials for entrance and exit of a parking facility.</p>
                    </div>
                    <div className={styles.SPDPRKSection2Example}>
                        <h3>Ticket Dispenser</h3>
                        <p>A parking ticket dispenser is a machine or device that issues parking tickets to drivers when they enter a parking lot or garage. The parking ticket usually contains information such as the date, time, and location of the vehicle, as well as a unique identifier that is used to track the vehicle's entry and exit from the parking facility.</p>
                        <p>When a driver enters a parking facility, they approach the parking ticket dispenser and push a button or take a ticket from the machine. The dispenser then prints a ticket with the necessary information, which the driver can keep with them until they are ready to leave the parking facility.</p>
                        <p>Even in the SPDPRK system, despite having alternative ticketless options to offer you, a faster throughput is often achieved by using the SPDPRK Ticket Dispenser. A SPDPRK Ticket Dispenser comes standard with a Customer Information Screen, a VOip intercom, a Pushbutton for tickets, Ticket Printer and is an all stainless steel construction for longevity and strength. </p>
                    </div>
                    <div className={styles.SPDPRKSection2Example}>
                        <h3>Ticket Acceptor</h3>
                        <p>A parking ticket acceptor is a device that accepts parking tickets when drivers exit a parking lot or garage. The parking ticket acceptor is usually located at the exit gate of the parking facility and isdesigned to read the ticket that was issued to the driver when they entered the facility.</p>
                        <p>When a driver exits a parking lot or garage, they approach the exit gate and insert their parking ticket into the acceptor. The acceptor then reads the information on the ticket, such as the date and time of entry, and calculates the fee that the driver must pay to exit the facility.</p>
                        <p>Parking ticket acceptors are an important component of parking payment systems and its core functions can be replicated on the SPDPRK system. Commonly used in parking lots and garages to collect parking fees and manage the flow of vehicles.Once the fee has been calculated, the driver can pay using various payment methods, , credit/debit card, or mobile payment. If the driver has lost their ticket or exceeded the time limit of their parking session, the acceptor may charge a higher fee through the SPDPRK system.</p>
                    </div>
                    <div className={styles.SPDPRKSection2Example}>
                        <h3>Validator</h3>
                        <p>There are many possible interpretations for "parking validator", such as a tool to validate parking ticket information online, a validator for online parking reservations or payments, or a validator for parking rules and regulations in a specific area.  Web Validations, stamps, stickers and many others.</p>
                        <p>SPDPRK makes it all so easy, validations are done on the customer phone or sent by the system automatically to the recipient for entrance or exit by an authorized user. Efficient design with one or multiple solutions to fit your needs.</p>
                    </div>
                    <div className={styles.SPDPRKSection2Example}>
                        <h3>Card Reader</h3>
                        <p>A parking card reader for access control is a type of card reader used specifically for controlling access to parking areas or parking lots. It works by reading a special type of card that is issued to authorized personnel or vehicles that are permitted to enter the parking area. The card is usually swiped or inserted into the reader, and the information on the card is then verified by a central access control system to determine whether the cardholder has permission to enter the parking area.</p>
                        <p>SPDPRK can eliminate the need for contractor credentials to License plate recognition, biometrics or a customers own phone via bluetooth or automated QR code sent to them.</p>
                    </div>
                    <div className={styles.SPDPRKSection2Example}>
                        <h3>Cashier Terminal</h3>
                        <p>A parking cashier terminal is a device used to process payment transactions at a parking lot or garage. It typically includes a touch screen display, a card reader, and a printer. Customers who have parked their vehicles can use the terminal to pay for their parking fees, either by inserting their parking ticket into the card reader or by scanning a barcode on their ticket using a mobile device.</p>
                        <p>Once the payment is processed, the terminal will print a receipt for the customer and open the gate to allow the vehicle to exit the parking lot. Parking cashier terminals may also have features such as the ability to issue refunds, manage parking lot occupancy, and generate reports on parking revenue and usage. They are an essential part of a parking management system, helping to streamline the payment process and improve the customer experience.</p>
                        <p>SPDPRK can reduce the equipment footprint or human resource allocation of a cashier to those that still see the value in the personal touch of having people dealing with people in the parking process.</p>
                    </div>
                </div>
            </div>
            <div className={styles.SPDPRKSection3}>
                <h2>Highlights of using SPDPRK</h2>
                <div className={styles.SPDPRKSection3Benefits}>
                    <div>
                        <Image src="/install.svg" width={60} height={60} />
                        <p>Fast & easy installation</p>
                    </div>
                    <div>
                        <Image src="/reduced.svg" width={60} height={60} />
                        <p>Reduced footprint</p>
                    </div>
                    <div>
                        <Image src="/payments.svg" width={60} height={60} />
                        <p>Flexible payment systems</p>
                    </div>
                    <div>
                        <Image src="/puzzle.svg" width={60} height={60} />
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
                        <Image className={styles.SPDPRKSection4Image} src="/hardware.jpeg" width={300} height={300} />
                        <Image className={styles.SPDPRKSection4Image} src="/family.jpg" width={300} height={300} />
                    </div>
                </div>
            </div>
            <Upgrade />
        </div>
    );
}
 
export default SPDPRK;