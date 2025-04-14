import React from 'react'
import { Course } from '../models/models'


const BASE_URL="http://localhost:3000";

// Correctly use the Course interface as props, but don't destructure it directly
const CourseCard = ({ course }: { course: Course }) => {
  return (
    <div className="max-w-sm w-full bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200">
      <img className="w-full h-48 object-cover" src={`${BASE_URL}${course.imageUrl}`} alt={course.title} />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">{course.title}</h2>
        <p className="text-gray-700 text-sm mb-4">{course.description}</p>
        <div className="flex items-center">
          
          <div className="text-sm">
            <p className="text-gray-500">Course Creator: <span className="text-gray-900 font-medium leading-none">{course.teacher?.name ?? 'Unknown'}</span></p>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseCard