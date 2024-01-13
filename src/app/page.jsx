import { courses } from '@/lib/placeholder-data'
import CourseCard from '@/components/CourseCard'
export default function Home() {
    return (
        <div className="mini-w-screen flex  min-h-screen flex-row flex-wrap justify-center">
            <CourseCard />
            {courses.map((course) => (
                <CourseCard
                    key={course.id}
                    id={course.id}
                    title={course.title}
                    price={course.price}
                    description={course.description}
                />
            ))}
        </div>
    )
}
