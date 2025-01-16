import { useNavigate } from 'react-router-dom'
import { BookOpen, Zap } from 'lucide-react'

export default function Menu() {
  const navigate = useNavigate()

  return (
    <div className='min-h-screen flex flex-col md:justify-center justify-start gap-8 md:p-16 p-8'>
      <div className='min-h-screen bg-aid1Mobile md:bg-aid1 md:bg-cover bg-contain bg-no-repeat bg-bottom blur-[3px] absolute inset-0'></div>
      <h2 className='md:self-start self-center justify-self-center md:text-5xl text-3xl font-bold text-red-800 z-10'>
        ¿QUÉ DESEAS HACER?
      </h2>
      <div className='self-start flex flex-col gap-6'>
        <button
          onClick={() => navigate('/learn')}
          className='group flex items-center gap-4 md:bg-slate-900/20 bg-slate-200/80 md:hover:bg-slate-800/30 hover:bg-slate-300/30 p-6 rounded-xl backdrop-blur-sm transition-all'
        >
          <BookOpen className='w-8 h-8 text-blue-800' />
          <div className='text-left'>
            <h3 className='text-xl text-blue-800 font-bold'>Aprender</h3>
            <p className='text-slate-700'>
              Accede al contenido completo del curso
            </p>
          </div>
        </button>

        <button
          onClick={() => navigate('/quick-consult')}
          className='group flex items-center gap-4 md:bg-slate-900/20 bg-slate-200/80 md:hover:bg-slate-800/30 hover:bg-slate-300/30 p-6 rounded-xl backdrop-blur-sm transition-all'
        >
          <Zap className='w-8 h-8 text-yellow-400' />
          <div className='text-left'>
            <h3 className='text-xl text-blue-800 font-bold'>Consulta Rápida</h3>
            <p className='text-slate-700'>Encuentra respuestas específicas</p>
          </div>
        </button>
      </div>
    </div>
  )
}
