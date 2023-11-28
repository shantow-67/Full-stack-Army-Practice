function UpdateIncrementDecrement({
  handleIncrementValue,
  handleDecrementValue,
  incrementValue,
  decrementValue,
}) {
  return (
    <div>
      <label style={{ padding: "0.5rem 1rem" }}>Increment Value</label>
      <input
        style={{ padding: "0.5rem 1rem" }}
        type="Number"
        onChange={handleIncrementValue}
        value={incrementValue}
      />
      <label style={{ padding: "0.5rem 1rem" }}>Decrement Value</label>
      <input
        style={{ padding: "0.5rem 1rem" }}
        type="Number"
        onChange={handleDecrementValue}
        value={decrementValue}
      />
    </div>
  );
}

export default UpdateIncrementDecrement;
