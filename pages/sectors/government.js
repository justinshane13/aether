import SectorPage from '@/comps/SectorPage';

const Government = () => {
    return (
        <SectorPage
            name="Government & Public Institutions"
            description={[
                "Government and public institutions use parking equipment such as parking barriers, payment kiosks, and parking guidance systems , LPR for secure entry. Colleges and universities often experience high traffic during peak times, with students and staff arriving and leaving parking facilities at the same time. Despite the rush, it is important to maintain a hospitable environment for students, employees, guests, and suppliers. Efficient traffic flow and swift entry and exit are critical in achieving this goal.",
                "SPDPRK has decades of experience in providing smart parking solutions for college and university campuses. Our cutting-edge, user-friendly, and scalable parking solutions ensure a smooth flow of traffic, even during peak times."
            ]}
            image="/government_image.jpg"
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
 
export default Government;