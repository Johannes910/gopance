import defaultpicture from "../assets/images/defaultpicture.jpg"

export const ImageSelector = () => {

    return (
        <>
            <div class="container">

                <img src={defaultpicture} class="img-rounded" position="relative" width="200px" height="200px" alt="imageselected" />

                <div class="col-lg-3">
                    <label for="formFile" class="form-label"></label>
                    <input class="form-control" type="file" id="formFile" />
                </div>
            </div>
        </>
    )
}