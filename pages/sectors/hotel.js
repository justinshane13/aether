import SectorPage from '@/comps/SectorPage';

const Hotel = () => {
    return (
        <SectorPage
            name="Hotels"
            description={[
                "Hotels use parking equipment such as parking gates, payment kiosks, and parking guidance systems, as well as hotel terminals to for guest parking. Indeed, parking facilities are an essential asset for hotels, as they can significantly impact the guest experience. A well-managed parking solution can improve convenience and provide peace of mind for guests, as they don't have to worry about finding a parking spot or their car's safety.",
                "SPDPRK offers various parking solutions which can benefit hotels, these Customized solutions can also be created to meet the specific needs and requirements of each hotel, ensuring that guests can enjoy a hassle-free parking experience.",
                "Overall, providing efficient parking solutions can be a significant advantage for hotels, enhancing guest satisfaction and loyalty."
            ]}
            image="/hotel_image.jpg"
            characteristics={[
                {
                    image: "/government.svg",
                    text: "Lorem Ipsum"
                },
                {
                    image: "/flag.svg",
                    text: "Lorem Ipsum"
                },
                {
                    image: "/airport.svg",
                    text: "Lorem Ipsum"
                },
                {
                    image: "/clipboard.svg",
                    text: "Lorem Ipsum"
                }
            ]}
        />
    );
}
 
export default Hotel;