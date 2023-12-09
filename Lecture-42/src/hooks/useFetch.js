import { useEffect, useState } from "react";

const useFetch = (url, cb) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const getData = async () => {
        setLoading(true);
        try {
            const res = await fetch(url);
            const result = await res.json();
            if (cb) {
                setData(cb(result));
            } else {
                setData(result);
            }
            setLoading(false);
        } catch (e) {
            setError(e.message);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return {
        data,
        loading,
        error,
    };
};

export default useFetch;
