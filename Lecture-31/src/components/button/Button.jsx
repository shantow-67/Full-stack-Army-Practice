/* eslint-disable react/prop-types */
import classes from "./Button.module.css"

const varient = {
    primary: {
        backgroundColor: "#9c27b0",
        color:"#fff"
    },
    success: {
       backgroundColor: "#4caf50",
        color:"#fff"
    },
    danger: {
       backgroundColor: "#d32f2f",
        color:"#fff"
    },
    info: {
        backgroundColor: "#aeea00",
        color:"black"
    },
    orange: {
        backgroundColor: "#ff5722",
        color:"#fff"
    },
}

const sizes = {
    small: {
        padding:"0.5rem 1rem"
    },
    medium: {
        padding:"1rem 2rem"
    },
    big: {
        padding:"1.5rem 3rem"
    },
}

const Button = (props) => {
    const userVarient = varient[props.varient]
    const userSize =sizes[props.size]

    const text = props.text
    const type = props.type

    return (
        
        <button
            type={type}
            className={classes.button}
            style={{
                ...userVarient,
                ...userSize
            }}
            >{text}</button>
       
    );
};

export default Button;