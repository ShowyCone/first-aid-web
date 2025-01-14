import { useNavigate } from 'react-router-dom'
import {
  Bandage,
  Ambulance,
  BriefcaseMedical,
  Cross,
  HeartPulse,
  Accessibility,
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
  ]

  return (
    <div className='min-h-screen flex flex-col items-start justify-center p-16'>
      <Navigation />
      <div className='bg-aid1 bg-cover bg-center blur-[3px] absolute inset-0'></div>
      <div className='flex justify-center items-center flex-col'>
        <h2 className='text-4xl font-bold mb-12 z-10'>APRENDER</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl'>
          {classes.map((classItem) => {
            const Icon = classItem.icon
            return (
              <button
                key={classItem.id}
                onClick={() => navigate(`/class/${classItem.id}`)}
                className='flex flex-col items-center gap-4 bg-slate-900/20 hover:bg-slate-800/30 p-6 rounded-xl backdrop-blur-sm transition-all text-slate-900 font-bold'
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
