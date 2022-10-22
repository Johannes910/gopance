import '../css/shopList.css'
import caminadaPico from '../assets/images/3.png'
import sancochoImg from '../assets/images/2.png'

export const ShopList = () => {



    return (

        <>
            <div className="panel panel-default"><br/>

                <table id="customers">
                    <tr>
                        <th>Producto</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Domicilio</th>
                        <th>Total</th>
                    </tr>
                     <tr>
                        <td><img src={sancochoImg} className= "imgPedi"></img>&nbsp;Sancocho "Pacatá"</td>
                        <td>$19.000</td>
                        <td><input type="number" min="0" max="100" step="1" value="1" /></td>
                        <td>$6.000</td>
                        <td>$25.000</td>
                      </tr>

                        <tr>
                        <td><img src={caminadaPico} className= "imgPedi"></img>&nbsp;Caminata en Piccoloro</td>
                        <td>$70.000</td>
                        <td><input type="number" min="0" max="100" step="1" value="2" /></td>
                        <td>$0</td>
                        <td>$140.000</td>
                      </tr>

                </table>
            </div>
        </>

    )
}