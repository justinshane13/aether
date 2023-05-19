import SectorPage from '@/comps/SectorPage';

const Hotel = () => {
    return (
        <SectorPage
            name="Hotels"
            description={[
                "In order to embody the essence of true hospitality, it is crucial to deliver unparalleled service across every aspect of your guests' visit. This is precisely why numerous hoteliers nationwide have chosen SPDPRK as their trusted partner. Our seamless solutions are designed to seamlessly integrate with that experience, ensuring real-time communication and a flawless guest experience from start to finish. By embracing our innovative technology, hoteliers can elevate their level of service, leaving a lasting impression on their guests and fostering a reputation for excellence.",
                "SPDPRK offers various parking solutions which can benefit hotels, these Customized solutions can also be created to meet the specific needs and requirements of each hotel, ensuring that guests can enjoy a hassle-free parking experience.",
                "Overall, providing efficient parking solutions can be a significant advantage for hotels, enhancing guest satisfaction and loyalty."
            ]}
            image="/hotel_image.jpg"
            characteristics={[
                {
                    image: "/government.svg",
                    text: "Room Key or Phone Integration"
                },
                {
                    image: "/flag.svg",
                    text: "Valet Systems"
                },
                {
                    image: "/sector_val_white.svg",
                    text: "Validation Systems"
                },
                {
                    image: "/clipboard.svg",
                    text: "SPDPRK Mobile App"
                }
            ]}
        />
    );
}
 
export default Hotel;