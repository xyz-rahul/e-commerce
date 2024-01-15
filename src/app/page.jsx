import { getAllItems } from '@/actions/items'
import CourseCard from '@/components/CourseCard'

export default async function Home() {
    const courses = await getAllItems()
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
