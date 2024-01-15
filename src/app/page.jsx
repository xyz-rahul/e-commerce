'use client'
import { getAllItems } from '@/actions/items'
import { useState } from 'react'
import CourseCard from '@/components/CourseCard'
import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'

export default async function Home() {
    const [courses, setCourses] = useState([])
    const [totalCourses, setTotalCourses] = useState(0)
    const searchParams = useSearchParams()

    useEffect(() => {
        const page = searchParams.get('page')
        getAllItems(page).then((output) => {
            setCourses(output.data)
            setTotalCourses(output.totalItems)
        })
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
