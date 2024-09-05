import React, { useState, useEffect } from 'react';
import ProjectSummary from './ProjectSummary';
import ModalItem from './Modal'
import { v4 as uuidv4 } from 'uuid';


function ProjectListing( {items, isLoading, hasMore} ) {

    return (
        <div className="grid grid-cols-3 gap-4 p-4 items-stretch">
            {isLoading && <p>Loading...</p>}
            {items.length === 0 && !isLoading && <p>No items available</p>}
            {items.map(item => (
                <ProjectSummary key={uuidv4()} item={item} />
            ))}
            {!hasMore && !isLoading && items.length > 0 && <p>No more items to load</p>}
        </div>
    );
};

export default ProjectListing;
