import SectorPage from '@/comps/SectorPage';

const Corporate = () => {
    return (
        <SectorPage
            name="Corporate Offices & Business Parks"
            description={[
                "Corporate offices and business parks use parking equipment such as parking gates, payment kiosks, validations, systems to manage their parking facilities and provide access for their employees and visitors.",
                "Our contract parking solution offers tenants  a self-service portal to manage their parking account and request spaces for purchase with ease. SPDPRK allows you to automate your accounts receivable processes and reducing administrative workload."
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
 
export default Corporate;