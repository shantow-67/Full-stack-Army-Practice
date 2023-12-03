import "./App.css";

/**
 * TODO: Handle User Input Fields🟢
 * TODO: Handle operations🟢
 * TODO: Handle a list of histories
 * TODO: Render history list
 * TODO: Restore the history
 */

import { useState } from "react";

function* generateId() {
    let id = 0;

    while (true) {
        yield id++;
    }
}

const getId = generateId();

const initialInputState = {
    a: "",
    b: "",
};

const App = () => {
    const [inputState, setInputState] = useState({ ...initialInputState });
    const [result, setResult] = useState(0);
    const [histories, setHistories] = useState([]);
    const [restoreItem, setRestoreItem] = useState(null);

    const handleOperation = operator => {
        if (!inputState.a || !inputState.b) {
            alert("invalid number");
            return;
        }
        const f = new Function(
            "operator",
            `return ${inputState.a}${operator}${inputState.b}`
        );
        const result = f(operator);
        // useState work asynchronously ,so befeore set result we need same result for history
        setResult(result);
        // setResult(eval(`${inputState.a}${operator}${inputState.b}`));

        const history = {
            id: getId.next().value,
            inputs: inputState,
            operator: operator,
            result: result,
            date: new Date(),
        };

        setHistories([history, ...histories]);
        setRestoreItem(null);
    };

    const handleRestore = history => {
        setInputState({
            ...history.inputs,
        });
        setResult(history.result);
        setRestoreItem(history.id);
    };

    const handleInputChange = e => {
        setInputState({
            ...inputState,
            [e.target.name]: parseInt(e.target.value),
        });
    };
    const handleClear = () => {
        setInputState({ ...initialInputState });
        setResult(0);
    };

    return (
        <div className="container">
            <h3>Lecture-38</h3>
            <h1>Calculator that can restore history</h1>

            <input
                type="number"
                placeholder="0"
                value={inputState.a}
                onChange={handleInputChange}
                className="input"
                name="a"
            />
            <br />
            <input
                type="number"
                placeholder="0"
                value={inputState.b}
                onChange={handleInputChange}
                className="input"
                name="b"
            />
            <div className="btn-group">
                <button className="btn" onClick={() => handleOperation("+")}>
                    +
                </button>
                <button className="btn" onClick={() => handleOperation("-")}>
                    -
                </button>
                <button className="btn" onClick={() => handleOperation("*")}>
                    *
                </button>
                <button className="btn" onClick={() => handleOperation("/")}>
                    /
                </button>
                <button className="btn" onClick={handleClear}>
                    Clear
                </button>
            </div>
            <h1>Result : {result}</h1>
            <br />
            <div className="hitory">
                <h2>History</h2>
                {histories.length === 0 ? (
                    <p>There is no history</p>
                ) : (
                    <ul>
                        {histories.map(history => (
                            <li key={history.id} className="list">
                                <p>
                                    {history.inputs.a}
                                    {history.operator}
                                    {history.inputs.b} result : {history.result}
                                </p>
                                <p>
                                    <small>
                                        {history.date.toLocaleDateString()}{" "}
                                        {history.date.toLocaleTimeString()}
                                    </small>
                                </p>
                                <button
                                    onClick={() => handleRestore(history)}
                                    disabled={
                                        restoreItem !== null &&
                                        restoreItem === history.id
                                    }
                                >
                                    restore
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default App;
