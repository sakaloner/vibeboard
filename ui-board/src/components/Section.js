import React, { useState } from "react";
import CheckBox from './CheckBox';

function Section({ title, filters, onFilter }) {
    const [isVisible, setIsVisible] = useState(true);
    
    return (
        <div>
            <h3 className="cursor-pointer" onClick={() => setIsVisible(!isVisible)}>- {title}</h3>
            {isVisible &&
                filters.map(filter => (
                    <CheckBox key={filter} label={filter} onFilter={onFilter}/>
                ))
            }
        </div>
    );
}

export default Section;
