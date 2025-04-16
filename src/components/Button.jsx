// will serve as the basic button component for the numbers, operators, and functions on the calculator
// I am passing in the className prop to implement styles dynamically 
import React from "react";

function Button({className, name, value, handleClick }) {

    return (
        <>
            <button className={className} value={value} name={name} onClick={handleClick} type="button">
                {value}
            </button>
        </>
    );
}

export default Button;