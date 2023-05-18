import SectorPage from '@/comps/SectorPage';

const Corporate = () => {
    return (
        <SectorPage
            name="Corporate Offices & Business Parks"
            description={[
                "Office property management staff require a versatile system capable of managing employee, contract, and visitor parking seamlessly. SPDPRK offers a range of innovative products designed specifically to meet these needs. With our WEBvalidation and vast amount of Card Features for monitoring access and revenue,, your facility can streamline these processes, enhance efficiency, and maximize revenue potential.",
                "Our advanced WEBVAL validation system simplifies parking validation for employees and visitors, while allowing centralized control and coordination of parking operations. By implementing SPDPRK, your office property can optimize parking management, resulting in smoother operations, improved revenue generation, and an overall enhanced experience for all stakeholders."
            ]}
            image="/corporate_image.jpg"
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
 
export default Corporate;