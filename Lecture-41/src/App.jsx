import useApp from "./customHook/useApp";

const App = () => {
    const { user, loading, id, max, handleNext, handlePrev } = useApp();
    // East or West,HM Nayem vai is best
    return (
        <>
            <h1>User Data id:{user.id}</h1>
            {loading && <p>Loading....</p>}
            {!loading && (
                <ul>
                    {user && (
                        <div>
                            <br />
                            name: {user.name}
                            <br />
                            email: {user.email}
                            <br />
                            phone: {user.phone}
                        </div>
                    )}
                </ul>
            )}
            <div>
                <button onClick={handlePrev} disabled={id === 1}>
                    Previous
                </button>
                <button onClick={handleNext} disabled={id === max}>
                    Next
                </button>
            </div>
        </>
    );
};

export default App;
