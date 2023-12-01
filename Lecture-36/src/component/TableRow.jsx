/* eslint-disable react/prop-types */
function TableRow({
    id,
    productName,
    stock,
    price,
    quantity,
    total,
    increment,
    decrement,
}) {
    return (
        <>
            <tr style={{ textAlign: "center" }}>
                <td>{id}</td>
                <td>{productName}</td>
                <td>{stock}</td>
                <td>{price}</td>
                <td>{quantity}</td>
                <td>{total}</td>
                <td>
                    <button
                        style={{
                            fontSize: "2rem",
                            marginRight: "5px",
                            padding: "1rem",
                        }}
                        onClick={() => {
                            increment(id);
                        }}
                        disabled={stock === quantity ? true : false}
                    >
                        +
                    </button>
                    <button
                        style={{ fontSize: "2rem", padding: "1rem" }}
                        onClick={() => {
                            decrement(id);
                        }}
                        disabled={quantity === 0 ? true : false}
                    >
                        -
                    </button>
                </td>
            </tr>
        </>
    );
}

export default TableRow;
