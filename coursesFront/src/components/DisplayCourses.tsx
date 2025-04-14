import React, { useEffect, useState } from 'react'
import { Course } from '../models/models';
import axios from 'axios';
import CourseCard from './CourseCard';



const DisplayCourses = () => {
    const [courses,setCourses]=useState<Course[]>([]);
    const [imageSrc,setImageSrc]=useState<string|null>();
    useEffect(()=>{
        axios.get<Course[]>('http://localhost:3000/courses').
        then(response=>{
            setCourses(response.data);
        })
        .catch(error=>{
            console.error('Error fetching courses',error)
        })
    },[]);
    
  return (
    <div className="flex flex-wrap gap-6 p-4">
        {courses.map(course=>(
            <CourseCard key={course.id} course={course} />
        ))}
    </div>
  )
}

export default DisplayCourses