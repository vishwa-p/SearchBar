import React, { useState } from 'react';
import './SearchBar.css';
import { FaSearch } from "react-icons/fa";
export const SearchBar = ({setResults}) => {
    const [input, setInput] = useState("");
    const fetchData = (value) => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((json) => {
                const results = json.filter((user) => {
                    return value && user && user.name && user.name.toLowerCase().includes(value);
                });
               setResults(results);
            });
    }
    const handleChange = (value) => {
        setInput(value);
        fetchData(value);
    }
    return (
        <div className='input-wrapper'>
            
            <FaSearch id='search-icon'></FaSearch>
            <input placeholder='Type to search...' value={input} onChange={(e) => handleChange(e.target.value)}></input>
        </div>
    )
}

export default SearchBar
