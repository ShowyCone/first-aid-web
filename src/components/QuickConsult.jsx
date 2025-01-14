import { useState } from 'react'
import { Search } from 'lucide-react'
import Navigation from './Navigation'

export default function QuickConsult() {
  const [searchTerm, setSearchTerm] = useState('')

  const items = [
    {
      id: 1,
      title: 'Introducción a los Primeros Auxilios',
      image: '/first-aid-web/jonesy.webp',
      tags: ['primeros auxilios', 'seguridad', 'salud'],
    },
    {
      id: 2,
      title: 'Cómo realizar RCP (Reanimación Cardiopulmonar)',
      image: '/first-aid-web/jonesy.webp',
      tags: ['rcp', 'emergencia', 'reanimación'],
    },
    {
      id: 3,
      title: 'Atención a heridas y hemorragias',
      image: '/first-aid-web/jonesy.webp',
      tags: ['heridas', 'hemorragias', 'primeros auxilios'],
    },
    {
      id: 4,
      title: 'Tratamiento de quemaduras',
      image: '/first-aid-web/jonesy.webp',
      tags: ['quemaduras', 'emergencia', 'salud'],
    },
    {
      id: 5,
      title: 'Cómo usar un desfibrilador (DEA)',
      image: '/jonesy.webp',
      tags: ['desfibrilador', 'rcp', 'emergencia'],
    },
    {
      id: 6,
      title: 'Manejo de fracturas y esguinces',
      image: '/first-aid-web/jonesy.webp',
      tags: ['fracturas', 'esguinces', 'primeros auxilios'],
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
            className='w-full bg-white/5 border border-white/20 rounded-lg pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-800 text-white'
          />
          <Search className='absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400' />
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className='bg-blue-900 rounded-xl overflow-hidden hover:bg-blue-950/70 transition-all cursor-pointer group'
            >
              <div className='aspect-square overflow-hidden'>
                <img
                  src={item.image}
                  alt={item.title}
                  className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
                />
              </div>
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
