import { useState } from "react";

const formFields = {
    name: {
        label: "What is your name?",
        type: "text",
        placeholder: "John Doe",
    },
    email: {
        label: "What is your email?",
        type: "email",
        placeholder: "john@example.com",
    },
    phone: {
        label: "What is your phone number?",
        type: "tel",
        placeholder: "+8801711111111",
    },
};


// Make a new Object that contains Value which is only needed in this state
const transFormedObject = obj => {
    return Object.keys(obj).reduce((acc, cur) => {
        acc[cur] = {
            ...obj[cur],
            value:"",
        };
        return acc;
    }, {});
};

// Make an Array to looping the form feilds
const mapObjectToArray = obj => {
    return Object.keys(obj).map((key) => ({ name: key, ...obj[key] }));
};



function DynamicForm() {
    const [formState, setFormState] = useState(transFormedObject(formFields));
//   Form State keeps an Objects for accesing as need
    const formData = mapObjectToArray(formState);
//   Form Data keeps an Array so that we can loop this Array and produce forms feilds dynamically

    const handleSubmit = (e) => {
        e.preventDefault();
        const values = Object.keys(formState).reduce((acc, cur) => {
            acc[cur] = formState[cur].value;
            return acc;
        }, {});

        console.log(values);
    };

    const handleChange = (e) => {
        setFormState(
            {
                ...formState,
            [e.target.name] : {
                ...formState[e.target.name],
                value: e.target.value,
            }
            }
        );
    };

    return (
        <form onSubmit={handleSubmit}>
            {formData.map((item, index) => (  
                <div key={index}>
                    <label htmlFor={item.name}>{item.label}</label>
                    <input
                        type={item.type}
                        name={item.name}
                        placeholder={item.placeholder}
                        value={item.value}
                        onChange={handleChange}
                    />
                </div>
            ))}
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    );
}

export default DynamicForm;
