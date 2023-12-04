/* eslint-disable react/prop-types */
function Button({ text, operation, disabled }) {
    return (
        <div>
            <button className="btn" onClick={operation} disabled={disabled}>
                {text}
            </button>
        </div>
    );
}

export default Button;
