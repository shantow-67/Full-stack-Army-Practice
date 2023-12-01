import { useState } from "react";
import "./index.css";
import TableRow from "./component/TableRow";

const productList = [
    {
        id: "P1",
        productName: "Keyboard",
        stock: 10,
        price: 2000,
    },
    {
        id: "P2",
        productName: "Mouse",
        stock: 5,
        price: 1500,
    },
    {
        id: "P3",
        productName: "Headphone",
        stock: 15,
        price: 2500,
    },
];

function App() {
    const [products, setProducts] = useState(
        productList.map(product => ({
            ...product,
            quantity: 0,
            total: 0,
        }))
    );

    const handleIncrement = id => {
        setProducts(
            products.map(product => {
                if (id === product.id && product.stock >= product.quantity) {
                    product.quantity++;
                    product.total = product.quantity * product.price;
                }
                return product;
            })
        );
    };

    const handleDecrement = id => {
        setProducts(
            products.map(product => {
                if (id === product.id) {
                    product.quantity--;
                    product.total = product.quantity * product.price;
                }
                return product;
            })
        );
    };

    const totalAmount = products.reduce((acc, cur) => acc + cur.total, 0);
    return (
        <>
            <table style={{ width: "60%", margin: "0 auto", fontSize: "2rem" }}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Product Name</th>
                        <th>Stock</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total </th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <TableRow
                            key={product.id}
                            {...product}
                            increment={handleIncrement}
                            decrement={handleDecrement}
                        />
                    ))}
                </tbody>
            </table>

            <div
                style={{
                    fontSize: "2rem",
                    textAlign: "center",
                    marginTop: "2rem",
                }}
            >
                {totalAmount > 0 && (
                    <p>
                        Total Amount is : <strong>{totalAmount}</strong>
                    </p>
                )}
            </div>
        </>
    );
}

export default App;
