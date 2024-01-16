import { getItem } from '@/actions/items'
import React from 'react'

export default async function page({ params }) {
    const id = params.id
    const output = await getItem(id)
    const { success } = output
    if (!success) {
        const { message } = output

        return (
            <div className="mt-[40%] flex w-screen justify-center text-center text-4xl font-bold">
                {message}
            </div>
        )
    }

    const course = output.data

    return (
        <div className="flex justify-center">
            <div className="flex min-h-screen flex-col text-left">
                <h1 className="m-4 mb-6 p-4 text-left text-4xl font-bold text-black md:text-4xl">
                    {course.title}
                </h1>

                <div className="flex flex-col md:flex-row ">
                    <div className="relative m-4 flex h-80 w-[300px] flex-col items-stretch justify-around  rounded-lg bg-gray-50 p-4 shadow shadow-sky-800">
                        <div className="px-6 py-8 sm:p-10 sm:pb-6">
                            <div className="grid w-full grid-cols-1 items-center justify-center text-left">
                                <div>
                                    <h2 className="mb-4 text-3xl font-bold text-gray-800">
                                        Buy Item
                                    </h2>
                                    <p className="mt-2 text-sm text-gray-500">
                                        Suitable to grow steadily.
                                    </p>
                                </div>
                                <div className="mt-6">
                                    <p>
                                        <span className="text-5xl font-light tracking-tight text-black">
                                            ₹{course.price}
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex px-6 pb-8 sm:px-8">
                            <button className="relative my-3 flex h-[50px] w-[150px] cursor-pointer items-center justify-center overflow-hidden rounded-xl bg-black text-[#fff] shadow-md transition-all duration-500 ease-in-out before:absolute before:-left-full before:top-0 before:z-[-1] before:h-full before:w-full before:rounded-xl before:bg-gradient-to-r before:from-[#009b49] before:to-[rgb(105,184,141)] before:transition-all before:duration-500 before:ease-in-out hover:scale-105 hover:shadow-lg hover:before:left-0">
                                BUY
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="m-4 w-[300px] min-w-fit rounded-md border-2 border-gray-700 p-4">
                            <h2 className="mb-6 text-xl font-medium text-black">
                                Instructor: {course.instructor}
                            </h2>
                            <h2 className="mb-6 text-xl font-medium text-black">
                                Price: ₹ {course.price}{' '}
                            </h2>
                            <h2 className="mb-6 text-xl font-medium text-black">
                                Duration: {course.duration} hours
                            </h2>
                        </div>

                        <div className="m-4 mb-6 w-96 max-w-xl">
                            <h3 className=" text-xl font-semibold text-black">
                                Descriptions
                            </h3>
                            <p>{course.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
