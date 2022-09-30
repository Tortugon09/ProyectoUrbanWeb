import "../../../assets/Styles/Bodies/BodySingIn/SingInFormulario.css"
import InputsBox1 from "./SingInComps/InputsBox1";
import InputDateBorn from "./SingInComps/InputDateBorn";
import InputsBox2 from "./SingInComps/InputsBox2.jsx";


function SingInFormulario() {
    return(
        <section className="SingIn-Formulario">
            <div className="login-wrapper">
                <form action="">
                    <div className="boxs-input"><h1>Sign in</h1>
                        <InputsBox1></InputsBox1>
                    </div>
                    <div className="boxs-input">
                        <InputsBox2></InputsBox2>
                    </div>

                </form>
            </div>
        </section>
    )
}
export default SingInFormulario