'use client'
import { getAllItems } from '@/actions/items'
import { useState } from 'react'
import CourseCard from '@/components/CourseCard'
import { useEffect } from 'react'
import { useSearchParams, usePathname, useRouter } from 'next/navigation'

export default function Home() {
    const [courses, setCourses] = useState([])
    const [totalCourses, setTotalCourses] = useState(0)
    const [success, setSuccess] = useState(false)
    const [message, setMessage] = useState('loading...')
    const searchParams = useSearchParams()
    const pathname = usePathname()
    const router = useRouter()
    const size = parseInt(8)
    const page = searchParams.get('page') ?? 1
    useEffect(() => {
        getAllItems(page, size)
            .then((output) => {
                if (output.success) {
                    setSuccess(true)

                    setCourses(output.data)
                    setTotalCourses(output.totalItems)
                } else {
                    setSuccess(false)
                    setMessage(output.message)
                }
            })
            .catch((error) => console.log(error))
    }, [searchParams])
    function handleSearch(pageIndex) {
        const params = new URLSearchParams(searchParams)
        params.set('page', pageIndex)
        router.push(`${pathname}?${params.toString()}`)
    }

    if (!success) {
        return (
            <div className="mt-[40%] flex w-screen justify-center text-center text-4xl font-bold">
                {message}
            </div>
        )
    }
    return (
        <>
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

            <div className="flex items-center justify-center gap-x-1 dark:bg-gray-700">
                {parseInt(page) > 1 && (
                    <button
                        type="button"
                        className="inline-flex min-h-[38px] min-w-[38px] items-center justify-center gap-x-2 rounded-lg border border-transparent px-2.5 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:border-transparent dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
                        onClick={() => handleSearch(parseInt(page) - 1)}
                    >
                        <PrevPageSymbol />
                        <span aria-hidden="true" className="sr-only">
                            Previous
                        </span>
                    </button>
                )}
                <button
                    type="button"
                    className="flex min-h-[38px] min-w-[38px] items-center justify-center rounded-lg border border-transparent px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:border-transparent dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
                >
                    {page}
                </button>
                {page < parseInt(totalCourses) / size && (
                    <button
                        type="button"
                        className="inline-flex min-h-[38px] min-w-[38px] items-center justify-center gap-x-2 rounded-lg border border-transparent px-2.5 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:border-transparent dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
                        onClick={() => handleSearch(parseInt(page) + 1)}
                    >
                        <span aria-hidden="true" className="sr-only">
                            Next
                        </span>
                        <NextPageSymbol />
                    </button>
                )}
            </div>
        </>
    )
}

function PaginationController(currPage, totalPages, onClickCallback) {
    return (
        <>
            <div className="flex items-center justify-center gap-x-1 dark:bg-gray-700">
                {parseInt(currPage) > 1 && (
                    <button
                        type="button"
                        className="inline-flex min-h-[38px] min-w-[38px] items-center justify-center gap-x-2 rounded-lg border border-transparent px-2.5 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:border-transparent dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
                        onClick={() => onClickCallback(parseInt(currPage) - 1)}
                    >
                        <PrevPageSymbol />
                        <span aria-hidden="true" className="sr-only">
                            Previous
                        </span>
                    </button>
                )}
                <button
                    type="button"
                    className="flex min-h-[38px] min-w-[38px] items-center justify-center rounded-lg border border-transparent px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:border-transparent dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
                >
                    {currPage}
                </button>
                {currPage < totalPages && (
                    <button
                        type="button"
                        className="inline-flex min-h-[38px] min-w-[38px] items-center justify-center gap-x-2 rounded-lg border border-transparent px-2.5 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:border-transparent dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
                        onClick={() => onClickCallback(parseInt(currPage) + 1)}
                    >
                        <span aria-hidden="true" className="sr-only">
                            Next
                        </span>
                        <NextPageSymbol />
                    </button>
                )}
            </div>
        </>
    )
}

function PrevPageSymbol() {
    return (
        <svg
            className="h-3.5 w-3.5 flex-shrink-0"
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m15 18-6-6 6-6" />
        </svg>
    )
}

function NextPageSymbol() {
    return (
        <svg
            className="h-3.5 w-3.5 flex-shrink-0"
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m9 18 6-6-6-6" />
        </svg>
    )
}
