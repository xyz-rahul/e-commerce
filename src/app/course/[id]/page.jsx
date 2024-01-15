import { getItem } from '@/actions/items'
import React from 'react'

export default async function page({ params }) {
    const id = params.id
    const course = await getItem(id)

    return (
        <div className="flex justify-center">
            <div className="flex min-h-screen flex-col text-left">
                <h1 class="m-4 mb-6 p-4 text-left text-4xl font-bold text-black md:text-4xl">
                    {course.title}
                </h1>

                <div className="flex flex-col md:flex-row ">
                    <div class="relative m-4 flex h-80 w-[300px] flex-col items-stretch justify-around  rounded-lg bg-gray-50 p-4 shadow shadow-sky-800">
                        <div class="px-6 py-8 sm:p-10 sm:pb-6">
                            <div class="grid w-full grid-cols-1 items-center justify-center text-left">
                                <div>
                                    <h2 class="mb-4 text-3xl font-bold text-gray-800">
                                        Buy Item
                                    </h2>
                                    <p class="mt-2 text-sm text-gray-500">
                                        Suitable to grow steadily.
                                    </p>
                                </div>
                                <div class="mt-6">
                                    <p>
                                        <span class="text-5xl font-light tracking-tight text-black">
                                            ₹{course.price}
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="flex px-6 pb-8 sm:px-8">
                            <button class="relative my-3 flex h-[50px] w-[150px] cursor-pointer items-center justify-center overflow-hidden rounded-xl bg-black text-[#fff] shadow-md transition-all duration-500 ease-in-out before:absolute before:-left-full before:top-0 before:z-[-1] before:h-full before:w-full before:rounded-xl before:bg-gradient-to-r before:from-[#009b49] before:to-[rgb(105,184,141)] before:transition-all before:duration-500 before:ease-in-out hover:scale-105 hover:shadow-lg hover:before:left-0">
                                BUY
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="m-4 w-[300px] min-w-fit rounded-md border-2 border-gray-700 p-4">
                            <h2 class="mb-6 text-xl font-medium text-black">
                                Instructor: {course.instructor}
                            </h2>
                            <h2 class="mb-6 text-xl font-medium text-black">
                                Price: ₹ {course.price}{' '}
                            </h2>
                            <h2 class="mb-6 text-xl font-medium text-black">
                                Duration: {course.duration} hours
                            </h2>
                        </div>

                        <div className="m-4 mb-6 w-96 max-w-xl">
                            <h3 class=" text-xl font-semibold text-black">
                                Descriptions
                            </h3>
                            <p>{course.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    /* return (
        <div className="m-[50px] flex min-h-screen flex-col items-center rounded-md p-6 shadow-2xl">
            <div className="container mx-4 mt-8 text-5xl font-extrabold ">
                {course.title}
            </div>

            <div className="container mx-auto mt-8 ">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
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

                    <div className="md:col-span-1 sm:order-1">
                        <div className="rounded-md bg-white p-6 shadow-md">
                            <h2 className="mb-4 text-xl font-bold">
                                Enroll in the Course
                            </h2>
                            <p className="mb-4 text-gray-700">
                                Price: ${course.price}
                            </p>
                            <a
                                href="#_"
                                className="group relative inline-block px-4 py-2 text-2xl font-extrabold"
                            >
                                <span className="absolute inset-0 h-full w-full translate-x-1 translate-y-1 transform bg-black transition duration-200 ease-out group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                                <span className="absolute inset-0 h-full w-full border-2 border-black bg-white group-hover:bg-black"></span>
                                <span className="relative text-black group-hover:text-white">
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
    ) */
}
