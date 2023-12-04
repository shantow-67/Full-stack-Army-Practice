import "./App.css";

/**
 * TODO: Handle User Input Fields🟢
 * TODO: Handle operations🟢
 * TODO: Handle a list of histories🟢
 * TODO: Render history list🟢
 * TODO: Restore the history🟢
 */

import { useState } from "react";
import InputSection from "./components/inputSection/inputSection";
import OperationSection from "./components/operationSection/OperationSection";
import HistorySection from "./components/history/HistorySection";

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

    const handleArithmeticOps = operator => {
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
    const handleClearOps = () => {
        setInputState({ ...initialInputState });
        setResult(0);
    };

    return (
        <div className="container">
            <h3>Lecture-39</h3>
            <h1>Calculator that can restore history</h1>

            <InputSection
                inputs={inputState}
                handleInputChange={handleInputChange}
            />

            <div>
                <OperationSection
                    handleArithmeticOps={handleArithmeticOps}
                    handleClearOps={handleClearOps}
                />
            </div>
            <h1>Result : {result}</h1>
            <br />
            <HistorySection
                histories={histories}
                handleRestore={handleRestore}
                restoreItem={restoreItem}
            />
        </div>
    );
};

export default App;
