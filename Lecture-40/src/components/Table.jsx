/* eslint-disable react/prop-types */

import { useState } from "react";

function Table({ contacts }) {
    const [filter, setFilter] = useState("All");
    const [searchTerm, setSearchTerm] = useState("");

    console.log(searchTerm);

    const handleChange = e => {
        setFilter(e.target.value);
    };

    // const searchCB = (contact) =>
    // contact.name.includes(searchTerm) || contact.email.includes(searchTerm);
    // //
    const searchCB = contact =>
        contact.name.includes(searchTerm) || contact.email.includes(searchTerm);

    let filteredContacts = [];

    if (filter === "All") {
        filteredContacts = searchTerm ? contacts.filter(searchCB) : contacts;
    } else {
        filteredContacts = contacts.filter(
            contact => contact.group === filter && searchCB(contact)
        );
    }

    return (
        <div className="table-content">
            <div>
                <label htmlFor="filter">Filter :</label>
                <select value={filter} onChange={handleChange} name="filter">
                    <option value="All">All</option>
                    <option value="">None</option>
                    <option value=" Home">Home</option>
                    <option value=" Office">Office</option>
                </select>
                <input
                    type="text"
                    value={searchTerm}
                    placeholder="search"
                    onChange={e => {
                        setSearchTerm(e.target.value);
                    }}
                />
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email </th>
                        <th> Group</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredContacts.map((contact, index) => (
                        <tr key={index}>
                            <td>{contact.name}</td>
                            <td>{contact.email}</td>
                            <td>{contact.group}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Table;
