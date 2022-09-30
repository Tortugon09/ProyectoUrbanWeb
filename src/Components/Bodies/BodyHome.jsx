import "../../assets/Styles/Bodies/BodyHome/BodyHome.css"
import BodyTitles from "./BodyHome/BodyHomeComps/BodyTitles.jsx";
import BodyBottoms from "./BodyHome/BodyHomeComps/BodyBottoms.jsx";



function BodyHome() {
    return(
            <section className="body-main">
                    <div className="main-titles">
                        <BodyTitles></BodyTitles>
                        <BodyBottoms></BodyBottoms>
                    </div>
            </section>
    )
}
export default BodyHome