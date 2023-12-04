/* eslint-disable react/prop-types */
function NumberField({ value, onChange, name }) {
    return (
        <div>
            <input
                type="number"
                placeholder="0"
                value={value}
                onChange={onChange}
                className="input"
                name={name}
            />
        </div>
    );
}

export default NumberField;
