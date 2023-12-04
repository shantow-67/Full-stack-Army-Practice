import { useState } from "react";
import Button from "../ui/Button";

/* eslint-disable react/prop-types */
function HistoryItem({ history, handleRestore, disabled }) {
    const [show, setShow] = useState(false);

    const handleToggle = () => {
        setShow(!show);
    };
    return (
        <li key={history.id} className="list">
            <div style={{ display: "flex", gap: "1rem", textAlign: "center" }}>
                <div>
                    <p>
                        {history.inputs.a}
                        {history.operator}
                        {history.inputs.b} result : {history.result}
                    </p>
                </div>
                <div>
                    <Button
                        text={show ? "Hide" : "Show"}
                        operation={handleToggle}
                    />
                </div>
            </div>

            {show && (
                <div>
                    <p>
                        <small>
                            {history.date.toLocaleDateString()}{" "}
                            {history.date.toLocaleTimeString()}
                        </small>
                    </p>
                    <Button
                        operation={() => handleRestore(history)}
                        disabled={disabled}
                        text="Restore"
                    />
                </div>
            )}
        </li>
    );
}

export default HistoryItem;
