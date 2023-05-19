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
                    image: "/sector_lightning_white_new.svg",
                    text: "Fast Throughput"
                },
                {
                    image: "/sector_prepay_white.svg",
                    text: "Prepay Solutions"
                },
                {
                    image: "/sector_money_white_new.svg",
                    text: "Revenue Control"
                },
                {
                    image: "/sector_directions_white.svg",
                    text: "Wayfinding"
                }
            ]}
        />
    );
}

export default Sports