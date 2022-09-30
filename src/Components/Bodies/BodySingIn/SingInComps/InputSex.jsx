


function InputSex() {
    return(
        <div className="input-row">
            <div>
                <input type="radio" name="sex" id="SexChoice1" value="Hombre"/>
                <label className="radio-text" htmlFor="SexChoice1">Hombre</label>
                <input type="radio" name="sex" id="SexChoice2" value="Mujer"/>
                <label className="radio-text" htmlFor="SexChoice2">Mujer</label>
                <input type="radio" name="sex" id="SexChoice3" value="Prefiero-no-decir"/>
                <label className="radio-text" htmlFor="SexChoice3">Prefiero no decir</label>
            </div>

        </div>
    )
}
export default InputSex