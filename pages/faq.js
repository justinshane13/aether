import FAQTile from "@/comps/FAQTile";
import styles from '@/styles/FAQ.module.css'
import Link from "next/link";

const FAQ = () => {
    return (
        <div className={styles.faq}>
            <div className={styles.faqSection1}>
                <h1>Frequently Asked Questions</h1>
                <FAQTile
                    question="What is your product and how does it work?"
                    answer="SPDPRK is not one thing or process. SPDPRK seeks to simplify and reduce the 
                    equipment footprint. It does this without compromising the integrity of the revenue control 
                    accountability required by those that seek the most complete reporting tools 
                    available by any parking solutions manufacturer. 
                "
                />
                <FAQTile
                    question="How does your product or service solve my problem better than other solutions?"
                    answer="We are a responsive team and very navigable organization. A small organization with an eye for personal responsiveness and effective problem solving versus market share. We are geniunely interested in the clients' challenges."
                />
                <FAQTile
                    question="What are the benefits of using your product or service?"
                    answer="Here are some of the benefits: Our products are never obsolete. We are a one-stop-shop, so we will provide everything you need. Our products give consistency, with the most robust native reporting available. Hardware and software designed to last beyond the typical end of life cycle."
                />
                <FAQTile
                    question="How do I operate the ticket dispenser?"
                    answer="Simply press the button on the front of the dispenser to get a ticket. The ticket will be printed out and you can take it from the dispenser as it automatically cuts when printed."
                />
                <FAQTile
                    question="What types of tickets does the dispenser dispense?"
                    answer="Standard thermal paper [product link here]"
                />
                <FAQTile
                    question="Can I get multiple tickets at once?"
                    answer="It depends on the specific dispenser setup for your needs. Standard setup only allows dispensing of one ticket at a time and must proceed through the lane for a valid transaction."
                />
                <FAQTile
                    question="What do I do if I lose my ticket?"
                    answer="Contact the operator or manager of the dispenser or the event organizer for assistance. A lost ticket function is decided by the operator. All lane equipment has a standard VoIP intercom that needs to be setup by the operator for their particular situation."
                />
                <FAQTile
                    question="What happens if my ticket doesn't scan or work?"
                    answer="A QR code can be displayed on the exit device to assist the parker in the process of completing the transaction depending on the features purchased with the system."
                />
            </div>
            <div className={styles.faqSection2}>
                <h2>Have another question?</h2>
                <Link className={styles.faqContactLink} href="/contact">Contact us</Link>
            </div>
        </div>
    );
}
 
export default FAQ;