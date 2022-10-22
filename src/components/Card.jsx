import bg_image from "../assets/images/defaultpicture.jpg"
import '../css/card.css'

export const Card = ({ valueImg,valueTitle,valueParrafo,valuePrecio,valueRestaurant }) => {

    return (
        <>
 
                    <div className="thumbnail divCard divcenter">
                        <img src={valueImg} position="relative" width="200px" height="200px" alt="Descripción del producto" />
                        <div className="caption">
                            <h4 className="h4">{valueTitle}</h4>
                            <p className="p">{valueParrafo}</p>
                            <u><b>{valueRestaurant}</b></u>
                            <p className="pbutton"><b className= "bold">{valuePrecio}</b> <a href="#" className="btn btn-primary btnmas" role="button">+</a></p>
                        </div>
                    </div>

        </>

    )
}