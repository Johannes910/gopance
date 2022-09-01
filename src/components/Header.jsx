import defaultpfp from "../assets/images/defaultpfp.png"

export const Header = () => {


  return (
    <>
      <header class="p-3 text-bg-dark">
        <div class="container">
          <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
            </a>

            <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li><a href="#" class="nav-link px-5 text-secondary">INICIO</a></li>
              <li><a href="#" class="nav-link px-5 text-white">ALIMENTOS</a></li>
              <li><a href="#" class="nav-link px-5 text-white">SERVICIOS</a></li>
              <li><a href="#" class="nav-link px-5 text-white">TUS PEDIDOS</a></li>
            </ul>

            <div class="col-lg-4">
              <div class="input-group">
                <input type="text" class="form-control" placeholder="¡Explora todos los productos!" />
                <span class="input-group-btn">
                  <button class="btn btn-outline-light me-5" type="button">BUSCAR</button>
                </span>
              </div>
            </div>

            <div>
              <img src={defaultpfp} position="relative" width="50px" height="50px" alt="pfp" />
            </div>

          </div>
        </div>
      </header>

    </>

  )
}