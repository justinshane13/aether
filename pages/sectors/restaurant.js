import SectorPage from '@/comps/SectorPage';

const Restaurant = () => {
    return (
        <SectorPage
            name="Restaurants, Bars, Nightclubs, Casinos"
            description={[
                "Leisure destinations rely on providing convenience and a welcoming experience to their guests, making parking solutions a crucial element. Offering quick entry and exit from parking facilities adds an extra level of convenience for guests. To achieve this, a dependable and adaptable parking management system is necessary, one that can be fully customized to meet the specific needs and requirements of the destination.",
                "With over 45 years of experience in flexible parking management solutions, we can offer tailored advice and customized solutions to meet the unique needs of any leisure destination."
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
 
export default Restaurant