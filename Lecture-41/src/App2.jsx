import { useEffect } from "react";
import { useState } from "react";

let timeInterval = null;

const App2 = () => {
    const [count, setCount] = useState(0);
    const [lock, setLock] = useState(false);
    const [time, setTime] = useState(5);

    const handleAdd = () => {
        setCount(count + 1);
    };

    useEffect(() => {
        if (count === 5) {
            setLock(true);
        }
    }, [count]);

    useEffect(() => {
        if (lock && timeInterval === null) {
            timeInterval = setInterval(() => {
                setTime(prev => prev - 1);
            }, 1000);
        }
    }, [lock]);

    useEffect(() => {
        if (time === 0) {
            clearInterval(timeInterval);
            setCount(0);
            setLock(false);
            setTime(5);
            return;
        }
    }, [time]);

    return (
        <>
            <h1>Count :{count} </h1>
            <button onClick={handleAdd} disabled={lock}>
                Add {lock && `locked ${time}s`}
            </button>
        </>
    );
};

export default App2;
