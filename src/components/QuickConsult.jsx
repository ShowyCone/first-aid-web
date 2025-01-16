import { useState } from 'react'
import { Search } from 'lucide-react'
import classesData from '../data/classesInfo.json'
import Navigation from './Navigation'
import { useNavigate } from 'react-router-dom'

export default function QuickConsult() {
  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate()

  const items = [
    {
      id: 1,
      title: classesData.classes[0].className,
      image: '/first-aid-web/jonesy.webp',
      tags: ['RCP', 'Emergencias Médicas', 'Paro Cardíaco'],
    },
    {
      id: 2,
      title: classesData.classes[1].className,
      image: '/first-aid-web/jonesy.webp',
      tags: ['Posición Lateral', 'Primeros Auxilios', 'Prevención de Asfixia'],
    },
    {
      id: 3,
      title: classesData.classes[2].className,
      image: '/first-aid-web/jonesy.webp',
      tags: ['Hemorragia', 'Control de Sangrado', 'Primeros Auxilios'],
    },
    {
      id: 4,
      title: classesData.classes[3].className,
      image: '/first-aid-web/jonesy.webp',
      tags: ['Golpe de Calor', 'Hipertermia', 'Deshidratación'],
    },
    {
      id: 5,
      title: classesData.classes[4].className,
      image: '/jonesy.webp',
      tags: [
        'Asfixia',
        'Obstrucción de Vías Respiratorias',
        'Maniobra de Heimlich',
      ],
    },
    {
      id: 6,
      title: classesData.classes[5].className,
      image: '/first-aid-web/jonesy.webp',
      tags: ['Epistaxis', 'Sangrado Nasal', 'Primeros Auxilios'],
    },
    {
      id: 7,
      title: classesData.classes[6].className,
      image: '/first-aid-web/jonesy.webp',
      tags: ['Convulsiones', 'Crisis Epiléptica', 'Atención Médica'],
    },
    {
      id: 8,
      title: classesData.classes[7].className,
      image: '/first-aid-web/jonesy.webp',
      tags: ['Limpieza de Heridas', 'Raspaduras', 'Cuidado Básico'],
    },
  ]

  const filteredItems = items.filter(
    (item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.tags.some((tag) => tag.includes(searchTerm.toLowerCase()))
  )

  return (
    <div className='min-h-screen p-8'>
      <Navigation />
      <div className='max-w-6xl mx-auto pt-16'>
        <h2 className='text-3xl font-bold mb-8 text-center'>Consulta Rápida</h2>

        <div className='relative max-w-2xl mx-auto mb-12'>
          <input
            type='text'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder='Busca por título o etiquetas...'
            className='w-full bg-white/5 border border-blue-800/80 rounded-lg pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-800 text-white'
          />
          <Search className='absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400' />
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className='bg-blue-900 rounded-xl overflow-hidden hover:bg-blue-950/70 transition-all cursor-pointer group'
              onClick={() => navigate(`/blog/${item.id}`)} // Redirigir al blog correspondiente
            >
              {/*               <div className='aspect-square overflow-hidden'>
                <img
                  src={item.image}
                  alt={item.title}
                  className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
                />
              </div> */}
              <div className='p-4'>
                <h3 className='text-slate-300 text-lg font-semibold mb-2'>
                  {item.title}
                </h3>
                <div className='flex flex-wrap gap-2'>
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className='text-slate-100 text-xs bg-white/20 px-2 py-1 rounded-full'
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
