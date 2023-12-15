import React from "react";
import Section from './Section';

const sections = [
    {
        title: 'Goal',
        filters: ['Learning', 'Charity', 'Money', 'Vibes'],
    },
    {
        title: 'Topic',
        filters: ['Code', 'Design'],
    },
    {
        title: 'State',
        filters: ['Planning', 'Development'],
    },
    {
        title: 'Acceptance criteria',
        filters: ['text', 'code', 'leetcode', 'vibes'],
    },
    {
        title: 'Members',
        filters: ['>1', '>3', '>5'],
    },
    {
        title: 'Location',
        filters: ['Online', 'IRL'],
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
