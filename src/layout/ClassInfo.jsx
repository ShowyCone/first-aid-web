import classesData from '../data/classesInfo.json'

export default function ClassInfo({ classId }) {
  const classInfo = classesData.classes[classId].info

  return (
    <ul className='px-16'>
      {classInfo.map((info, index) => (
        <li
          className='text-red-900 font-medium m-5 text-lg list-disc'
          key={index}
        >
          {info}
        </li>
      ))}
    </ul>
  )
}
