import React, { useState } from 'react';
import PropTypes from 'prop-types';
export const CategoryAdd = ({ setCategories }) => {
    const [ inputValue, setInputValue ] = useState("");
    const handleInputValue = (value) => {
        setInputValue(value.target.value);
    }
    const handleSubmit = e => {
        e.preventDefault();
        if (inputValue.trim().length > 2) {
            setCategories( cat => [inputValue, ...cat]);
            setInputValue("");
        } else {

        }
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" value={inputValue} 
                    onChange={handleInputValue} 
                />
            </form>
        </>
    )
}

CategoryAdd.propTypes = {
    setCategories: PropTypes.func.isRequired
}