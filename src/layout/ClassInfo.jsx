import classesData from '../data/classesInfo.json'

export default function ClassInfo({ classId }) {
  const classInfo = classesData.classes[classId].info

  return (
    <ul className='md:px-16 w-80 md:w-auto overflow-y-auto max-h-96 md:max-h-80'>
      {classInfo.map((info, index) => (
        <li
          className='text-red-900 font-medium m-3 md:m-5 text-lg list-disc'
          key={index}
        >
          {info}
        </li>
      ))}
    </ul>
  )
}
