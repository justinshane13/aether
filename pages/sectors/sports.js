import SectorPage from '@/comps/SectorPage';

const Sports = () => {
    return (
        <SectorPage
            name="Sports Venues & Arenas"
            description={[
                "Sports venues and arenas use professional parking equipment such as parking barrier gates, payment kiosks, and parking guidance systems, handheld terminals, credit card in to manage their parking facilities."
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
 
export default Sports