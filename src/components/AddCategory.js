import React, { useState } from 'react'
import PropTypes from "prop-types";

export default function AddCategory({ setCategorias }) {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const hadleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length > 2) {
            setCategorias(cats => [inputValue, ...cats])
            setInputValue('')
        }
    }

    return (
        <form onSubmit={hadleSubmit}>

            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategorias: PropTypes.func.isRequired
}