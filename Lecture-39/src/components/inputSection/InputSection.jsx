/* eslint-disable react/prop-types */
import NumberField from "../ui/NumberField";

function InputSection({ inputs, handleInputChange }) {
    return (
        <div>
            <p>Input field</p>
            <NumberField
                value={inputs.a}
                onChange={handleInputChange}
                name="a"
            />
            <br />
            <NumberField
                value={inputs.b}
                onChange={handleInputChange}
                name="b"
            />
        </div>
    );
}

export default InputSection;
