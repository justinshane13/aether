import SectorPage from '@/comps/SectorPage';

const Sports = () => {
    return (
        <SectorPage
            name="Sports Venues & Arenas"
            description={[
                "Sports venues and arenas use professional parking equipment such as parking barrier gates, payment kiosks, and parking guidance systems, handheld terminals, credit card in to manage their parking facilities.",
                "SPDPRK provides straightforward pay-on-entry solutions, seamless integration with ticket agencies, and convenient SPDPRK portal for any phone payments. These offerings aim to streamline event parking, establish effective audit controls, and deliver exceptional customer service."
            ]}
            image="/sports_image.jpg"
            characteristics={[
                {
                    image: "/sector_car_white.svg",
                    text: "Fast Throughput"
                },
                {
                    image: "/flag.svg",
                    text: "Prepay Solutions"
                },
                {
                    image: "/sector_rev_white.svg",
                    text: "Revenue Control"
                },
                {
                    image: "/clipboard.svg",
                    text: "Wayfinding"
                }
            ]}
        />
    );
}

export default Sports