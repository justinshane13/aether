import SectorPage from '@/comps/SectorPage';

const Shopping = () => {
    return (
        <SectorPage
            name="Shopping Centers & Malls"
            description={[
                "We offer a validation platform which enables commercial organizations in your shopping center to effortlessly validate and pay for their customers' parking tickets.Retailers may think that the best way to attract customers is by offering free parking, but this is not always feasible. ",
                "Local authorities or owners who provide and manage parking facilities believe that offering free parking can lead to a free-for-all situation where spaces are difficult to control and easy to abuse. Moreover, the cost of providing and managing parking facilities must be funded, which can be a challenge given the limited number of available spaces."
            ]}
            image="/shopping_image.jpg"
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
 
export default Shopping