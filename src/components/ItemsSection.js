import React, { useState, useEffect } from 'react';
import SearchBar from "../components/SearchBar"
import ProjectListing from "../components/ProjectListing"
import FilterPanel from "../components/FilterPanel"


export default function ItemsSection() {
  const [items, setItems] = useState([]);
  const [cursor, setCursor] = useState(null);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedOrderBy, setSelectedOrderBy] = useState('');

  const fetchItems = async () => {
    console.log('fetchItems is called')
    console.log('isLoading', isLoading, 'hasMore', hasMore)

    setIsLoading(true);
    try {
      const queryParams = new URLSearchParams({
        cursor: cursor || '',
        limit: '20',
        type: selectedType,
        search: searchText,
        orderBy: selectedOrderBy,
      });
      console.log('changing with params', {
        cursor: cursor || '',
        limit: '20',
        type: selectedType,
        search: searchText,
        orderBy: selectedOrderBy,
      })
      const response = await fetch(`/api/items?${queryParams.toString()}`);
      const data = await response.json();

      console.log('data', data)
      if (searchText || selectedType || selectedOrderBy) {
        console.log('its a search or filter case')
        setItems([...data.items])
      } else {
        setItems(prevItems => [...prevItems, ...data.items]);
        setCursor(data.nextCursor);
        setHasMore(data.hasMore);
      }
    } catch (error) {
      console.error('Error fetching items:', error);
    } finally {
      console.log('fetch items ended!!!!!!!!!!!!!')
      setIsLoading(false);
    }
  };

  useEffect(() => {
    (async () => {
            console.log('calling use effect')
            await fetchItems();
    })();
  }, [selectedType, searchText, selectedOrderBy]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    )
      return;

    fetchItems();
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [items]);

  const handleSearch = (searchText) => {
    console.log('called handleSearch with', searchText)
    setSearchText(searchText);
  };

  const handleTypeFilter = (selectedType) => {
    setSelectedType(selectedType);
  };

  const handleOrderByFilter = (selectedOrderBy) => {
    setSelectedOrderBy(selectedOrderBy);
  };


  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <div className="flex align-center w-full justify-center">
        <div className="w-1/6">
          <FilterPanel
            handleTypeFilter={handleTypeFilter}
            handleOrderByFilter={handleOrderByFilter}
          />
        </div>
        <div className="w-5/6">
            <ProjectListing items={items} isLoading={isLoading} hasMore={hasMore} />
        </div>
      </div>
    </div>
  );
}

