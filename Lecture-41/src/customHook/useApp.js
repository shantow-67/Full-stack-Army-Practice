import { useEffect, useState } from "react";
const cacheData = {};

const useApp = () => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(false);
    const [id, setId] = useState(1);
    const max = 10;

    const fetchUser = id => {
        return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(res => res.json())
            .then(data => {
                cacheData[`user-${id}`] = data;
                return data;
            });
    };

    useEffect(() => {
        if (cacheData[`user-${id}`]) {
            setUser(cacheData[`user-${id}`]);
            console.log(cacheData);
            return;
        }
        setLoading(true);
        fetchUser(id)
            .then(data => setUser(data))
            .finally(() => setLoading(false));
    }, [id]);

    useEffect(() => {
        if (!cacheData[`user-${id + 1}`] && id < max) {
            fetchUser(id + 1);
        }
    }, [id]);

    const handlePrev = () => {
        if (id > 1) {
            setId(id - 1);
        }
    };
    const handleNext = () => {
        if (id < max) {
            setId(id + 1);
        }
    };

    return {
        user,
        loading,
        id,
        max,
        handleNext,
        handlePrev,
    };
};

export default useApp;
