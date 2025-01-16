import { useNavigate } from 'react-router-dom'
import {
  Bandage,
  Ambulance,
  BriefcaseMedical,
  Cross,
  HeartPulse,
  Accessibility,
  Hospital,
  ShieldPlus,
} from 'lucide-react'
import Navigation from './Navigation'

export default function Learn() {
  const navigate = useNavigate()

  const classes = [
    { id: 1, title: 'Clase 1', icon: Bandage, color: 'text-blue-800' },
    { id: 2, title: 'Clase 2', icon: HeartPulse, color: 'text-red-800' },
    { id: 3, title: 'Clase 3', icon: Cross, color: 'text-blue-800' },
    { id: 4, title: 'Clase 4', icon: BriefcaseMedical, color: 'text-red-800' },
    { id: 5, title: 'Clase 5', icon: Accessibility, color: 'text-blue-800' },
    { id: 6, title: 'Clase 6', icon: Ambulance, color: 'text-red-800' },
    { id: 7, title: 'Clase 7', icon: Hospital, color: 'text-blue-800' },
    { id: 8, title: 'Clase 8', icon: ShieldPlus, color: 'text-red-800' },
  ]

  return (
    <div className='min-h-screen flex flex-col items-center md:items-start justify-center p-6 md:p-16'>
      <Navigation />
      <div className='min-h-screen bg-aid1Mobile md:bg-aid1 md:bg-cover bg-contain bg-no-repeat bg-bottom blur-[3px] absolute inset-0'></div>
      <div className='flex justify-center items-center flex-col mb-5 md:mb-0'>
        <h2 className='text-4xl font-bold mb-12 z-10'>APRENDER</h2>
        <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-1 md:gap-6 max-w-4xl z-10'>
          {classes.map((classItem) => {
            const Icon = classItem.icon
            return (
              <button
                key={classItem.id}
                onClick={() => navigate(`/class/${classItem.id}`)}
                className='flex flex-col w-24 md:w-32 items-center gap-4 md:bg-slate-900/20 bg-slate-200/80 md:hover:bg-slate-800/30 hover:bg-slate-300/30 p-6 rounded-xl backdrop-blur-sm transition-all text-slate-900 font-bold'
              >
                <Icon className={`w-12 h-12 ${classItem.color}`} />
                <h3 className='text-xl font-semibold'>{classItem.title}</h3>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
