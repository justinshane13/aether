import SectorPage from '@/comps/SectorPage';

const Corporate = () => {
    return (
        <SectorPage
            name="Corporate Offices & Business Parks"
            description={[
                "Corporate offices and business parks use parking equipment such as parking gates, payment kiosks, validations, systems to manage their parking facilities and provide access for their employees and visitors.",
                "Our contract parking solution offers tenants  a self-service portal to manage their parking account and request spaces for purchase with ease. SPDPRK allows you to automate your accounts receivable processes and reducing administrative workload."
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