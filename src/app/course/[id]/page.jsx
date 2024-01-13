import React from 'react'

const course = {
    id: 1,
    title: 'Introduction to Web Development',
    instructor: 'John Doe',
    price: 49.99,
    duration: 20,
    level: 'Beginner',
    description: 'A comprehensive introduction to web development...',
}
export default function page({ params }) {
    return (
        <div className="m-[50px] flex min-h-screen flex-col items-center rounded-md p-6 shadow-2xl">
            <div className="container mx-4 mt-8 text-5xl font-extrabold ">
                {course.title}
            </div>

            {/* Main Content */}
            <div className="container mx-auto mt-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    {/* Course Information */}
                    <div className="md:col-span-1">
                        <div className="mb-4 text-2xl font-bold">
                            Instructor: {course.instructor}
                        </div>
                        <div className="mb-4 text-xl font-medium">
                            Level: {course.level}
                        </div>
                        <div className="mb-4 text-xl font-medium">
                            Duration: {course.duration} hours
                        </div>
                    </div>

                    {/* Pricing and Enroll Section */}
                    <div className="md:col-span-1">
                        <div className="rounded-md bg-white p-6 shadow-md">
                            <h2 className="mb-4 text-xl font-bold">
                                Enroll in the Course
                            </h2>
                            <p className="mb-4 text-gray-700">
                                Price: ${course.price}
                            </p>
                            <a
                                href="#_"
                                class="group relative inline-block px-4 py-2 text-2xl font-extrabold"
                            >
                                <span class="absolute inset-0 h-full w-full translate-x-1 translate-y-1 transform bg-black transition duration-200 ease-out group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                                <span class="absolute inset-0 h-full w-full border-2 border-black bg-white group-hover:bg-black"></span>
                                <span class="relative text-black group-hover:text-white">
                                    Buy{' '}
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mb-4 text-xl font-medium">Description</div>
                <p className="mb-4 text-gray-700">{course.description}</p>
            </div>
        </div>
    )
}
