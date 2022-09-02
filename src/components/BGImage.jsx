import bg_image from "../assets/images/bgimage1.png"
import bg_image2 from "../assets/images/bgimage2.png"
export const BGImage = ({ value }) => {

    return (
        <>

            <main style={{ backgroundImage: `url(${value === '1' ? bg_image : bg_image2})` }} position="relative" width="100%" height="100%" alt="bgimage" />

        </>
    )
}