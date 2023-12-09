import useFetch from "./hooks/useFetch";

const App = () => {
    const { data, loading, error } = useFetch(
        "https://jsonplaceholder.typicode.com/users"
    );

    const posts = useFetch("https://jsonplaceholder.typicode.com/posts", data =>
        data.map(item => ({ id: item.id, title: item.title })).slice(0, 10)
    );

    /**
     * for optimizing purposes we are get ridding off unnecesarry data
     * data.map(item => ({ id: item.id, title: item.title }))
     *
     * and picking up data as our wish
     * .slice(0, 10)
     */
    const comments = useFetch(
        "https://jsonplaceholder.typicode.com/comments",
        data => data.slice(0, 10)
    );

    return (
        <>
            <div
                style={{
                    fontFamily: "Arial",
                    display: "flex",
                    gap: "2rem",
                    margin: "0 auto",
                    justifyContent: "center",
                    width: "90%",
                }}
            >
                <div>
                    <h1>Users</h1>
                    <hr />
                    {loading && <p>Loading...</p>}
                    {error && <p>{error}</p>}
                    {data.map(item => (
                        <li key={item.id}>{item.name}</li>
                    ))}
                </div>
                <div>
                    <h1>Posts</h1>
                    <hr />
                    {posts.loading && <p>Loading...</p>}
                    {posts.error && <p>{error}</p>}
                    {posts.data.map(item => (
                        <li key={item.id}>{item.title}</li>
                    ))}
                </div>
                <div>
                    <h1>Comments</h1>
                    <hr />
                    {comments.loading && <p>Loading...</p>}
                    {comments.error && <p>{error}</p>}
                    {comments.data.map(item => (
                        <li key={item.id}>{item.name}</li>
                    ))}
                </div>
            </div>
        </>
    );
};

export default App;
