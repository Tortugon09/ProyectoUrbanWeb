import HeaderMenu from "./HeaderComps/HeaderMenu.jsx";
import HeaderSearch from "./HeaderComps/HeaderSearch.jsx";
import Logo from "../../assets/img/LogoUrban.svg"
import "../../assets/Styles/Header/Header.css"

function Header() {
    return(
        <header className="header-main">
            <img src={Logo}/>
            <div className="box-menu">
                <HeaderMenu></HeaderMenu>
                <HeaderSearch></HeaderSearch></div>

        </header>
    )
}
export default Header