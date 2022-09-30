import InputNombre from "./InputNombre.jsx";
import InputApellidos from "./InputApellidos.jsx";
import InputEmail from "./InputEmail.jsx";
import InputSex from "./InputSex.jsx";
import InputDateBorn from "./InputDateBorn";
import InputPassword from "./InputPassword.jsx";

function InputsBox1() {
    return(
        <>
            <InputNombre></InputNombre>
            <InputApellidos></InputApellidos>
            <InputEmail></InputEmail>
            <InputPassword></InputPassword>
            <InputSex></InputSex>
            <InputDateBorn></InputDateBorn>

        </>
    )
}
export default InputsBox1