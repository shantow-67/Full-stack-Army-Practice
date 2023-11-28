import { useState } from "react";
import Layout from "../components/layout/Layout";
import Buttons from "../components/buttons/Buttons";
import UpdateIncrementDecrement from "../components/update-inc-dec/UpdateIncrementDecrement";


function About() {
    const [count, setcount] = useState(0)
    const [incrementValue, setincrementValue] = useState(10)
    const[decrementValue,setDecrementValue]=useState(5)

    function increment() {
       setcount(count + incrementValue)
    }
    function decrement() {
        setcount(count -decrementValue)
    }
    function handleIncrementValue(e) {
        setincrementValue(parseInt(e.target.value))
    }
    function handleDecrementValue(e) {
        setDecrementValue(parseInt(e.target.value))
    }
    

    return (
        <div>
            <Layout>
                <h1>Count = {count} </h1>
                <UpdateIncrementDecrement
                    incrementValue={incrementValue}
                    decrementValue={decrementValue}
                    handleIncrementValue={handleIncrementValue}
                    handleDecrementValue={handleDecrementValue}
                />
               <Buttons increment={increment} decrement={decrement}/> 
            </Layout>
        </div>
    );
}

export default About;