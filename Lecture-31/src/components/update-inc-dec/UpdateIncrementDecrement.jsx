

function UpdateIncrementDecrement({
    handleIncrementValue,
    handleDecrementValue,
    incrementValue,
    decrementValue

}) {
    return (
        <div>
            <label >Increment Value</label>
            <input type="Number" onChange={handleIncrementValue} value={incrementValue}/>
            <label >Decrement Value</label>
            <input type="Number" onChange={handleDecrementValue} value={decrementValue} />
            
        </div>
    );
}

export default UpdateIncrementDecrement;