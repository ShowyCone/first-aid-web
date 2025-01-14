import { useParams, useNavigate } from 'react-router-dom'
import Navigation from './Navigation'
import ClassInfo from '../layout/ClassInfo'
import ClassVisual from '../layout/ClassVisual'
import { useState } from 'react'
import ClassQuiz from '../layout/ClassQuiz'

export default function Class() {
  const [classSection, setClassSection] = useState(1)
  const { id } = useParams()
  const navigate = useNavigate()

  const classes = {
    1: 'Inconsciente sin respiraciones: RCP',
    2: '',
    3: '',
    4: '',
    5: '',
    6: '',
  }

  return (
    <div className='min-h-screen p-14'>
      <Navigation />
      <div className='z-0 bg-aid2 bg-cover bg-center blur-[15px] absolute inset-0'>
        <div className='bg-white/40 w-full h-full'></div>
      </div>
      <div className='flex flex-col items-center justify-center max-w-4xl mx-auto z-10'>
        <h2 className='relative text-4xl font-bold mb-8 z-20 text-red-800'>
          Clase °{id}
        </h2>
        <div className='bg-red-800 rounded-xl font-bold p-4 w-auto h-auto z-10'>
          <p className='text-xl text-slate-100'>{classes[id]}</p>
        </div>
        <div className='flex flex-col justify-center items-center mt-6 z-10 bg-slate-500/50 p-4 rounded-xl'>
          <h3 className='relative text-red-800 text-2xl font-bold'>
            ¿Qué hacer?
          </h3>
          {classSection === 1 ? (
            <ClassInfo classId={id - 1} />
          ) : classSection === 2 ? (
            <ClassVisual classId={id - 1} />
          ) : classSection === 3 ? (
            <ClassQuiz classId={id - 1} />
          ) : null}
        </div>
      </div>
      <button
        disabled={classSection === 1}
        className={`absolute left-2 bottom-5 w-24 h-10 rounded-xl bg-slate-500/50 hover:bg-slate-600/60 text-red-900 font-bold ${
          classSection === 1 ? 'cursor-not-allowed' : 'cursor-pointer'
        }`}
        onClick={() => setClassSection(classSection - 1)}
      >
        Anterior
      </button>
      <button
        disabled={classSection === 3}
        className={`absolute right-2 bottom-5 w-24 h-10 rounded-xl bg-slate-500/50 hover:bg-slate-600/60 text-blue-900 font-bold ${
          classSection === 3 ? 'cursor-not-allowed' : 'cursor-pointer'
        }`}
        onClick={() => setClassSection(classSection + 1)}
      >
        Siguiente
      </button>
    </div>
  )
}
