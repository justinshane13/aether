import SectorPage from '@/comps/SectorPage';

const Hospital = () => {
    return (
        <SectorPage
            name="Hospitals"
            description={[
                "To ensure a positive experience for all users including patients, visitors, staff, and suppliers, hospital parking facilities should prioritize comfort, ease of use, and hassle-free parking management.",
                "Hospital parking presents unique challenges due to the high traffic intensity during peak times and multiple user groups. Visitors should be able to park their vehicles without worrying about parking issues. SPDPRK with its extensive experience in hospital parking solutions, can provide a sensitive and comprehensive approach to address these complex needs and concerns."
            ]}
            image="/hospital_image.jpg"
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
 
export default Hospital;