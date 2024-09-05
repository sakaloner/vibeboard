'use client'
import Introduction from "../components/Introduction" 
import ItemsSection from "../components/ItemsSection"
import './globals.css'


///Modal.setAppElement('#root')



export default function Home() {
  return (
    <div className="flex-col justify-center items-center h-screen m-5 ">
      <Introduction  />
      <ItemsSection />
    </div>
  );
}

