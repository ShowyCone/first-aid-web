import { useNavigate } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function Introduction() {
  const navigate = useNavigate()

  return (
    <div className='min-h-screen flex flex-col justify-start md:justify-center p-8 pt-20 md:pt-8 text-center relative bg-aid1Mobile md:bg-cover bg-contain bg-bottom bg-no-repeat md:bg-aid1 bg-gray-200'>
      <img
        src='./ugma.webp'
        alt='logo-ugma'
        className='w-14 absolute top-2 right-2'
      />
      <h1 className='text-5xl font-bold mb-6 bg-clip-text text-red-800 self-start relative z-10'>
        PRIMEROS AUXILIOS UGMA
      </h1>
      <p className='text-xl font-medium mb-8 max-w-2xl text-blue-800 self-center md:self-start'>
        Emergencias en el campus, respuestas en tu mano.
      </p>
      <button
        onClick={() => navigate('/menu')}
        className='group flex items-center gap-2 bg-red-800 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-700 transition-all self-center md:self-start'
      >
        Comenzar
        <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
      </button>

      <div className='self-center absolute bottom-4 flex items-center gap-2 text-slate-800 hover:text-slate-400 transition-colors'>
        <span className='text-sm font-bold bg-slate-100/80 p-2 rounded-full'>
          Creado por Rafael Arciniega y Carlos Martinez
        </span>
      </div>
    </div>
  )
}
