'use client'
import { getAllItems } from '@/actions/items'
import { useState } from 'react'
import CourseCard from '@/components/CourseCard'
import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'

export default function Home() {
    const [courses, setCourses] = useState([])
    const [totalCourses, setTotalCourses] = useState(0)
    const searchParams = useSearchParams()

    const page = searchParams.get('page') || 1
    useEffect(() => {
        getAllItems(page)
            .then((output) => {
                setCourses(output.data)
                setTotalCourses(output.totalItems)
            })
            .catch((error) => console.log(error))
    }, [])
    return (
        <div className="mini-w-screen flex  min-h-screen flex-row flex-wrap justify-center">
            {courses.map((course) => (
                <CourseCard
                    key={course.course_id}
                    id={course.course_id}
                    title={course.title}
                    price={course.price}
                    description={course.description}
                />
            ))}
        </div>
    )
}
