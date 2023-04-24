import SectorPage from '@/comps/SectorPage';

const Residential= () => {
    return (
        <SectorPage
            name="Residential Complexes"
            description={[
                "Residential complexes use professional parking equipment such as parking barriers, access control systems, and license plate recognition (LPR) systems to manage their parking facilities and ensure that only authorized vehicles can park in their lots.",
                "Our access system offers remote management tools that allow you to control your system from anywhere, at any time. With our contactless solutions, you can offer the same convenience to your customers when it comes to access, validations, and payment. This enables you to provide a seamless parking experience to your tenants and visitors, while also improving operational efficiency and reducing costs."
            ]}
            image="/fall_road.jpg"
            characteristics={[
                {
                    image: "/hand_crafted.jpg",
                    text: "Lorem Ipsum"
                },
                {
                    image: "/hand_crafted.jpg",
                    text: "Lorem Ipsum"
                },
                {
                    image: "/hand_crafted.jpg",
                    text: "Lorem Ipsum"
                },
                {
                    image: "/hand_crafted.jpg",
                    text: "Lorem Ipsum"
                }
            ]}
        />
    );
}
 
export default Residential