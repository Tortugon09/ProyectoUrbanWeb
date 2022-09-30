import Header from "../Components/Header/Header.jsx";
import BodyHome from "../Components/Bodies/BodyHome.jsx";
import "../assets/Styles/Bodies/BodyHome/BodyHome.css"
import Footer from "../Components/Footer/Footer.jsx";

function LayoutHome() {
    return(
        <div className="background-body">
            <Header></Header>
            <BodyHome></BodyHome>
            <Footer></Footer>
        </div>
    )
}
export default LayoutHome