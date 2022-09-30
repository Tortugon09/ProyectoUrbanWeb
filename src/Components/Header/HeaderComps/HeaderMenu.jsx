import "../../../assets/Styles/Header/HeaderMenu.css"
import {Link} from "react-router-dom";


function HeaderMenu() {
 return(
     <nav className="menu">
         <ul className="list-menu">
             <Link to="/ProyectoUrbanWeb/"><li>Comunidad</li></Link>
             <Link to="/SingIn"><li>SingIn</li></Link>
             <Link to="/ProyectoUrbanWeb/"><li>Home</li></Link>
         </ul>
     </nav>
 )
}
export default HeaderMenu