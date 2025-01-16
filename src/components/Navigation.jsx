import { useNavigate } from 'react-router-dom'
import { Home, ArrowLeft } from 'lucide-react'

export default function Navigation() {
  const navigate = useNavigate()

  return (
    <div className='fixed top-0 left-0 p-3 rounded-br-xl flex gap-4 z-50 bg-white'>
      <button
        onClick={() => navigate('/')}
        className='flex items-center gap-2 text-slate-900 hover:text-slate-500 transition-colors'
      >
        <Home className='w-5 h-5' />
        Inicio
      </button>
      <button
        onClick={() => navigate('/menu')}
        className='flex items-center gap-2 text-slate-900 hover:text-slate-500 transition-colors'
      >
        <ArrowLeft className='w-5 h-5' />
        Menú
      </button>
    </div>
  )
}
