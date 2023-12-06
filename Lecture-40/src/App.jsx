import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Table from "./components/Table";

const App = () => {
    const [contacts, setContacts] = useState([]);

    const getContact = contact => {
        setContacts([...contacts, contact]);
    };

    return (
        <>
            <div className="app">
                <h1>Contact App</h1>
                <Form getContact={getContact} />
                <Table contacts={contacts} />
            </div>
        </>
    );
};

export default App;
