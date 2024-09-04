'use client'
import Modal from 'react-modal' 
import Introduction from "../components/Introduction" 
import SearchBar from "../components/SearchBar"
import ProjectListing from "../components/ProjectListing"
import FilterPanel from "../components/FilterPanel"
import './globals.css'


///Modal.setAppElement('#root')



export default function Home() {
  return (
    <div className="flex-col justify-center items-center h-screen m-5 ">
      <Introduction  />
      <SearchBar />
      <div className="flex align-center w-full justify-center">
        <div className="w-1/6">
            <FilterPanel />
        </div>
        <div className="w-5/6">
            <ProjectListing />
        </div>
      </div>
    </div>
  );
}

