import React from "react";
import Section from './Section';

const sections = [
    {
        title: 'Type',
        filters: ['Person', 'Event', 'Place'],
    },
    {
        title: 'Order',
        filters: ['likes', 'Creation Date', 'Random'],
    },
];

function FilterPanel({ onFilter }) {
    return (
        <div className="flex-col justify-center align-center p-4">
            {sections.map(section => (
                <Section key={section.title} title={section.title} filters={section.filters} onFilter={onFilter}/>
            ))}
        </div>
    );
}

export default FilterPanel;
