import Header from "../Components/Header/Header.jsx";
import Footer from "../Components/Footer/Footer.jsx";
import "../assets/Styles/Bodies/BodySingIn/BodySingIn.css"
import BodySingIn from "../Components/Bodies/BodySingIn.jsx";


function LayoutSingIn() {
    return(
        <div className="background-SingIn">
            <Header></Header>
            <BodySingIn></BodySingIn>
            <Footer></Footer>
        </div>
    )
}
export default LayoutSingIn