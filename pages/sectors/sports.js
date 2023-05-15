import SectorPage from '@/comps/SectorPage';

const Sports = () => {
    return (
        <SectorPage
            name="Sports Venues & Arenas"
            description={[
                "Sports venues and arenas use professional parking equipment such as parking barrier gates, payment kiosks, and parking guidance systems, handheld terminals, credit card in to manage their parking facilities."
            ]}
            image="/sports_image.jpg"
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
 
export default Sports