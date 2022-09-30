import IconGPS from "../../../../assets/img/Iconos/location-icon.svg"
import "../../../../assets/Styles/Bodies/BodyHome/BodyBottoms.css"

// <input type="submit" value="Explorar" className="bottom2 color-bottom"/>
function BodyBottoms() {
    return(
        <div className="box-bottoms">
            <a href="#"><div className="bottom1 color-bottom">
                <img src={IconGPS}/>
                <h3>Calzada al sumidero, Las Granjas.</h3>
            </div></a>
            <a href="#"><div className="bottom2 color-bottom"><h3>Explorar</h3></div></a>
        </div>
    )
}
export default BodyBottoms