import { useState } from "react";

const useCounter = ({ initial = 0, lowercount = 0, upperCount = 10 }) => {
    const [count, setCount] = useState(initial);

    const handleInc = () => {
        if (count < upperCount) {
            setCount(count + 1);
        }
    };
    const handleDec = () => {
        if (count > lowercount) {
            setCount(count - 1);
        }
    };

    return {
        count,
        handleInc,
        handleDec,
    };
};

export default useCounter;
