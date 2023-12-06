/* eslint-disable react/prop-types */
import { useState } from "react";

function Form({ getContact }) {
    const FORM_INIT_STATE = {
        name: "",
        email: "",
        group: "",
    };

    const [values, setValues] = useState({ ...FORM_INIT_STATE });
    const { name, email, group } = values;

    const handleChange = e => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        getContact(values);
        setValues({ ...FORM_INIT_STATE });
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name : </label>
                    <input
                        onChange={handleChange}
                        value={name}
                        type="text"
                        name="name"
                        placeholder="type your name..."
                    />
                </div>
                <div>
                    <label htmlFor="email">Email : </label>
                    <input
                        onChange={handleChange}
                        value={email}
                        type="email"
                        name="email"
                        placeholder="type your email..."
                    />
                </div>
                <div>
                    <label htmlFor="group">group : </label>
                    <select
                        name="group"
                        id="group"
                        onChange={handleChange}
                        value={group}
                    >
                        <option value="">Select</option>
                        <option value=" Home">Home</option>
                        <option value=" Office">Office</option>
                    </select>
                </div>

                <button type="submit" className="btn">
                    Create new contact
                </button>
            </form>
        </div>
    );
}

export default Form;
