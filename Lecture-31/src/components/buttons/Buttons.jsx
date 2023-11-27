

function Buttons({increment,decrement}) {
    return (
        <div>
            <button onClick={increment} >increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
}

export default Buttons;