import React from 'react'
import { useParams } from 'react-router-dom'
import Navigation from './Navigation'

const BlogDetails = ({ data }) => {
  const { id } = useParams() // Obtiene el ID desde la URL
  const classId = parseInt(id, 10) // Convierte el ID a número
  const classData = data.classes.find((cls) => cls.id === classId)

  if (!classData) {
    return (
      <div className='flex items-center justify-center h-screen bg-gray-100'>
        <p className='text-red-900 font-bold text-xl'>
          Clase no encontrada. Verifica el ID en la URL.
        </p>
      </div>
    )
  }

  return (
    <div className='p-6 bg-gray-100 min-h-screen'>
      <Navigation />
      <div className='max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6'>
        <h1 className='text-4xl font-bold text-blue-800 mb-4'>
          {classData.className}
        </h1>

        <ul className='mb-6 space-y-2'>
          {classData.info.map((item, index) => (
            <li
              key={index}
              className='text-gray-700 text-lg border-l-4 border-blue-800 pl-4'
            >
              {item}
            </li>
          ))}
        </ul>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-6'>
          {classData.visual.map((visual, index) => (
            <div
              key={index}
              className='bg-gray-50 border border-gray-200 p-4 rounded-lg shadow-md'
            >
              <img
                src={visual.image}
                alt={visual.text}
                className='w-full h-40 object-contain rounded-md mb-2'
              />
              <p className='text-gray-600'>{visual.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BlogDetails
