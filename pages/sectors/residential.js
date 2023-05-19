import SectorPage from '@/comps/SectorPage';

const Residential = () => {
    return (
        <SectorPage
            name="Residential Complexes"
            description={[
                "SPDPRK offers a straightforward, secure, and efficient solution to address the challenges of managing parking resources and reducing unwanted transient traffic. Unlike other commonly seen solutions, SPDPRK prioritizes simplicity and effectiveness in managing parking spaces, ensuring they are utilized by intended users while also able to generate income for property managers.",
                "Our access system offers remote management tools that allow you to control your system from anywhere, at any time. With our contactless solutions, you can offer the same convenience to your customers when it comes to access, validations, and payment. This enables you to provide a seamless parking experience to your tenants and visitors, while also improving operational efficiency and reducing costs.",
                "By implementing SPDPRK, property owners can efficiently manage parking, curb unauthorized parking, and maximize the utilization of parking spaces, all in an economical and cost-effective manner."
            ]}
            image="/residential_image.jpg"
            characteristics={[
                {
                    image: "/government.svg",
                    text: "Access Control"
                },
                {
                    image: "/flag.svg",
                    text: "Simplicity"
                },
                {
                    image: "/sector_license_plate_white.svg",
                    text: "License Plate Recognition"
                },
                {
                    image: "/sector_val_white.svg",
                    text: "Validations"
                }
            ]}
        />
    );
}
 
export default Residential