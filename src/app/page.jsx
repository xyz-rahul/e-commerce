import { getAllProducts } from '@/actions/product'
import CourseCard from '@/components/CourseCard'

export default async function Home() {
    const courses = await getAllProducts()
    return (
        <div className="mini-w-screen flex  min-h-screen flex-row flex-wrap justify-center">
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
