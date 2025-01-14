import classesData from '../data/classesInfo.json'

export default function ClassQuiz({ classId }) {
  const classInfo = classesData.classes[classId].quiz

  return (
    <>
      <div className='flex flex-col items-center p-3 gap-5'>
        <h4>{classInfo.question}</h4>
        <img
          className='object-cover h-32'
          src={classInfo.image}
          alt='Imagen relacionada con la pregunta'
        />
        <div className='flex flex-row gap-8'>
          {classInfo.options.map((info, index) => (
            <button className='text-slate-200 rounded-lg bg-red-900 w-24 h-14 font-medium text-lg list-disc'>
              {info}
            </button>
          ))}
        </div>
      </div>
    </>
  )
}
