import React, { useState, useEffect } from 'react';
import ProjectSummary from './ProjectSummary';
import ModalItem from './Modal'

function ProjectListing() {
    const [items, setItems] = useState([]);
    const [cursor, setCursor] = useState(null);
    const [hasMore, setHasMore] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    const fetchItems = async () => {
        if (isLoading || !hasMore) return;

        setIsLoading(true);
            try {
                const response = await fetch(`/api/items?cursor=${cursor || ''}&limit=20`);
                const data = await response.json();

                setItems(prevItems => [...prevItems, ...data.items]);
                setCursor(data.nextCursor);
                setHasMore(data.hasMore);
            } catch (error) {
                console.error('Error fetching items:', error);
            } finally {
                setIsLoading(false);
            }
    };

    useEffect(() => {
        fetchItems();
    }, []);

    const handleScroll = () => {
        if (
            window.innerHeight + document.documentElement.scrollTop !== 
            document.documentElement.offsetHeight
        ) return;

        fetchItems();
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [items]);


    return (
        <div className="grid grid-cols-3 gap-4 p-4 items-stretch">
            {items.map(item => (
                <ProjectSummary key={item.id} item={item} />
            ))}
            {isLoading && <p>Loading...</p>}
            {!hasMore && <p>No more items to load</p>}
        </div>
    );
};

export default ProjectListing;
