import bg_image from "../assets/images/defaultpicture.jpg"

export const Card = ({ value }) => {

    return (
        <>
            <div className="row">
                <div className="col-sm-6 col-md-4">
                    <div className="thumbnail">
                        <img src={bg_image} position="relative" width="200px" height="200px" alt="Descripción del producto" />
                        <div className="caption">
                            <h3 style={{color:"white"}}>Thumbnail label</h3>
                            <p>...</p>
                            <p><a href="#" className="btn btn-primary" role="button">Button</a> <a href="#" className="btn btn-default" role="button">Button</a></p>
                        </div>
                    </div>
                </div>

                <div className="col-sm-6 col-md-4" >
                    <div className="thumbnail">
                        <img src={bg_image} position="relative" width="200px" height="200px" alt="Descripción del producto" />
                        <div className="caption" >
                            <h3 style={{color:"white"}}>Thumbnail label</h3>
                            <p>...</p>
                            <p><a href="#" className="btn btn-primary" role="button">Button</a> <a href="#" className="btn btn-default" role="button">Button</a></p>
                        </div>
                    </div>
                </div>

                <div className="col-sm-6 col-md-4">
                    <div className="thumbnail">
                        <img src={bg_image} position="relative" width="200px" height="200px" alt="Descripción del producto" />
                        <div className="caption">
                            <h3 style={{color:"white"}}>Thumbnail label</h3>
                            <p>...</p>
                            <p><a href="#" className="btn btn-primary" role="button">Button</a> <a href="#" className="btn btn-default" role="button">Button</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}