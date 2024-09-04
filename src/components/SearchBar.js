import React from "react";

function SearchBar({ onSearch }) {
    return (
        <div className="p-4">
            <input 
                type="text" 
                className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                placeholder='Search for projects...'
                onChange={(event) => {if(onSearch) onSearch(event.target.value)}}
            />
        </div>
    );
}

export default SearchBar;
