import classesData from '../data/classesInfo.json'

export default function ClassVisual({ classId }) {
  const classInfo = classesData.classes[classId].visual

  return (
    <div className='flex md:flex-row flex-col overflow-y-auto overflow-x-auto gap-4 md:gap-8 max-h-96 md:max-h-80'>
      {classInfo.map((info, index) => (
        <div className='flex flex-col items-center p-5' key={index}>
          <img
            className='object-contain h-52'
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

/* /first-aid-web/jonesy.webp
/first-aid-web/jonesy.webp
/first-aid-web/jonesy.webp */
