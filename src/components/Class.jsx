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
    2: 'Inconsciente con respiración: Posición lateral',
    3: 'Heridas con sangrado',
    4: 'Golpe de Calor',
    5: 'Asfixia',
    6: 'Sangrado de nariz',
    7: 'Convulsiones',
    8: 'Limpieza de herida o raspón',
  }

  return (
    <div className='min-h-screen p-14'>
      <Navigation />
      <div className='z-0 bg-aid2 bg-cover bg-center blur-[15px] absolute inset-0'>
        <div className='bg-white/40 w-full h-full'></div>
      </div>
      <div className='flex flex-col items-center justify-center gap-3 md:gap-6 max-w-4xl mx-auto z-10'>
        <h2 className='relative text-4xl font-bold z-20 text-red-800'>
          Clase °{id}
        </h2>
        <div className='flex justify-center items-center bg-red-800 rounded-xl font-bold p-2 md:p-4 w-80 md:w-auto h-auto z-10'>
          <p className='text-[1.10rem] md:text-xl text-slate-100'>
            {classes[id]}
          </p>
        </div>
        <div className='flex flex-col justify-center items-center z-10 md:bg-slate-400/50 bg-slate-200/70 p-4 rounded-xl'>
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
        className={`absolute left-1 md:left-2 bottom-1 md:bottom-5 w-24 h-10 rounded-xl md:bg-slate-400/50 bg-slate-200/70 text-red-900 font-bold z-10 ${
          classSection === 1 ? 'cursor-not-allowed' : 'cursor-pointer'
        }`}
        onClick={() => setClassSection(classSection - 1)}
      >
        Anterior
      </button>
      <button
        className={`absolute right-1 md:right-2 bottom-1 md:bottom-5 w-24 h-10 rounded-xl md:bg-slate-400/50 md:hover:bg-slate-500/70 bg-slate-200/70 hover:bg-slate-500/50 text-blue-900 font-bold z-10`}
        onClick={
          classSection === 3
            ? () => navigate('/learn')
            : () => setClassSection(classSection + 1)
        }
      >
        {classSection === 3 ? 'Finalizar' : 'Siguiente'}
      </button>
    </div>
  )
}
