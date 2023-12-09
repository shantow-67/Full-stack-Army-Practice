import useCounter from "./hooks/useCounter";

const Counter = ({ handleDec, count, handleInc }) => {
    return (
        <>
            <div>
                <button onClick={handleDec}>-</button>
                <span>{count}</span>
                <button onClick={handleInc}>+</button>
            </div>
        </>
    );
};

const App = () => {
    const { count, handleInc, handleDec } = useCounter({ lowercount: -5 });
    const counter2 = useCounter({ initial: 5 });
    const counter3 = useCounter({ initial: 10, upperCount: 15 });

    return (
        <>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <h1>Counter</h1>
                <Counter
                    count={count}
                    handleDec={handleDec}
                    handleInc={handleInc}
                />
                <Counter
                    count={counter2.count}
                    handleDec={counter2.handleDec}
                    handleInc={counter2.handleInc}
                />
                <Counter
                    count={counter3.count}
                    handleDec={counter3.handleDec}
                    handleInc={counter3.handleInc}
                />
            </div>
        </>
    );
};

export default App;
