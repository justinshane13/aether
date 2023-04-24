import SectorPage from '@/comps/SectorPage';

const Airport = () => {
    return (
        <SectorPage
            name="Airport & Off-Airport"
            description={[
                "Airports use parking equipment such as automated ticket dispensers, payment machines, and parking guidance systems, parking reservations, valet.",
                "Airports are bustling environments, constantly filled with passengers, visitors, suppliers, public transit operators, taxis, and employees. As the need for both short-term and long-term parking is ongoing, airport parking facilities must be designed to accommodate all these groups with quick, easy, and user-friendly technologies. A dependable, adaptable, and user-friendly parking management system is crucial in ensuring smooth parking operations for all."
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
 
export default Airport;