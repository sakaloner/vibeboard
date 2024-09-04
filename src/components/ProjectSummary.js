import React from 'react'
import Image from 'next/image'
import ModalItem from './Modal'


let imageLinks = [
  'https://media.cnn.com/api/v1/images/stellar/prod/200413110126-01-buddha-art-statue-image.jpg?q=w_1160,c_fill/f_webp',
]


function ProjectSummary({ item }) {
  return (
    <ModalItem>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        <h1 className="text-2xl font-bold mb-4">{item.name}</h1>
        <h1 className="text-2 font-bold mb-4">{item.description}</h1>
        <div className="w-full max-w-lg p-4 bg-white shadow-lg rounded-lg flex items-center justify-center">
          <Image
            src={imageLinks[0]} // Replace with your image URL
            alt="Description of the image"
            width={800} // Set your desired width
            height={600} // Set your desired height
            className="rounded-lg"
          />
        </div>
      </div>
    </ModalItem>
  )
}
export default ProjectSummary;
