/* eslint-disable react/prop-types */
function Buttons({ increment, decrement }) {
  return (
    <>
      <div
        style={{
          marginTop: "1rem",
          display: "flex",
          gap: "1rem",
          justifyContent: "center",
        }}
      >
        <button style={{ padding: "0.5rem 1rem" }} onClick={increment}>
          increment
        </button>
        <button style={{ padding: "0.5rem 1rem" }} onClick={decrement}>
          Decrement
        </button>
      </div>
    </>
  );
}

export default Buttons;
