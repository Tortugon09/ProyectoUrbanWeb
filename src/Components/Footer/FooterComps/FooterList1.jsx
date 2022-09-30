import Urban from "../../../assets/img/Iconos/Urban.svg"
import Reservado from "../../../assets/img/Iconos/reservado.svg"
import "../../../assets/Styles/Footer/Footer.css"

function FooterList1() {
    return(
        <div className="list1-colum">
            <div className="list-colum">
                <div className="about"><img src={Urban}/>
                    <p className="text-footer">Nosotros creamos posibilidades para conecar al mundo <b className="title-footer">Skater</b></p></div></div>
            <div className="reservado">
                <img src={Reservado}/>
                <h3 className="text-footer">Urban.Todos los derechos reservados</h3>
            </div>
            </div>
    )
}
export default FooterList1;