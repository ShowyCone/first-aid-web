import classesData from '../data/classesInfo.json'

export default function ClassVisual({ classId }) {
  const classInfo = classesData.classes[classId].visual

  return (
    <div className='flex flex-row'>
      {classInfo.map((info, index) => (
        <div className='flex flex-col items-center p-5' key={index}>
          <img
            className='object-cover h-52'
            src={info.image}
            alt='Imagen que muestra la instucción'
          />
          <p className='text-red-900 font-medium text-lg list-disc'>
            {info.text}
          </p>
        </div>
      ))}
    </div>
  )
}
