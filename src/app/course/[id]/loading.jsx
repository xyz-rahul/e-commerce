import React from 'react'

export default function loading() {
    return (
        <section className="h-full w-full bg-white dark:bg-gray-900">
            <div className="flex flex-row">
                <div className="mx-auto w-full max-w-md animate-pulse p-9">
                    <h1 className="h-2 w-52 rounded-lg bg-gray-300 dark:bg-gray-600" />
                    <p className="mt-6 h-2 w-48 rounded-lg bg-gray-200 dark:bg-gray-700" />
                    <p className="mt-4 h-2 w-full rounded-lg bg-gray-200 dark:bg-gray-700" />
                    <p className="mt-4 h-2 w-64 rounded-lg bg-gray-200 dark:bg-gray-700" />
                    <p className="mt-4 h-2 w-4/5 rounded-lg bg-gray-200 dark:bg-gray-700" />
                </div>
                <div className="flex w-52 flex-col gap-4">
                    <div className="skeleton h-32 w-full" />
                    <div className="skeleton h-4 w-28" />
                    <div className="skeleton h-4 w-full" />
                    <div className="skeleton h-4 w-full" />
                </div>
            </div>
            <div className="container mx-auto animate-pulse px-6 py-8">
                <div className="text-center">
                    <p className="mx-auto h-2 w-32 rounded-lg bg-gray-200 dark:bg-gray-700" />
                    <div className="mt-10 flex flex-wrap justify-center gap-4">
                        <p className="h-2 w-24 rounded-lg bg-gray-200 dark:bg-gray-700" />
                        <p className="h-2 w-24 rounded-lg bg-gray-200 dark:bg-gray-700" />
                        <p className="h-2 w-24 rounded-lg bg-gray-200 dark:bg-gray-700" />
                        <p className="h-2 w-24 rounded-lg bg-gray-200 dark:bg-gray-700" />
                        <p className="h-2 w-24 rounded-lg bg-gray-200 dark:bg-gray-700" />
                    </div>
                </div>
                <hr className="my-6 border-gray-200 md:my-10 dark:border-gray-700" />
                <div className="flex flex-col items-center sm:flex-row sm:justify-between">
                    <p className="h-2 w-24 rounded-lg bg-gray-200 dark:bg-gray-700" />
                    <p className="h-2 w-64 rounded-lg bg-gray-200 dark:bg-gray-700" />
                </div>
            </div>
            <div className="flex flex-row">
                <div className="mx-auto w-full max-w-md animate-pulse p-9">
                    <h1 className="h-2 w-52 rounded-lg bg-gray-300 dark:bg-gray-600"></h1>

                    <p className="mt-6 h-2 w-48 rounded-lg bg-gray-200 dark:bg-gray-700"></p>
                    <p className="mt-4 h-2 w-full rounded-lg bg-gray-200 dark:bg-gray-700"></p>
                    <p className="mt-4 h-2 w-64 rounded-lg bg-gray-200 dark:bg-gray-700"></p>
                    <p className="mt-4 h-2 w-4/5 rounded-lg bg-gray-200 dark:bg-gray-700"></p>
                </div>
                <div className="mx-auto w-full max-w-md animate-pulse p-9">
                    <h1 className="h-2 w-52 rounded-lg bg-gray-300 dark:bg-gray-600"></h1>

                    <p className="mt-6 h-2 w-48 rounded-lg bg-gray-200 dark:bg-gray-700"></p>
                    <p className="mt-4 h-2 w-full rounded-lg bg-gray-200 dark:bg-gray-700"></p>
                    <p className="mt-4 h-2 w-64 rounded-lg bg-gray-200 dark:bg-gray-700"></p>
                    <p className="mt-4 h-2 w-4/5 rounded-lg bg-gray-200 dark:bg-gray-700"></p>
                </div>
            </div>
            <div className="container mx-auto animate-pulse px-6 py-8">
                <div className="text-center">
                    <p className="mx-auto h-2 w-32 rounded-lg bg-gray-200 dark:bg-gray-700"></p>

                    <div className="mt-10 flex flex-wrap justify-center gap-4">
                        <p className="h-2 w-24 rounded-lg bg-gray-200 dark:bg-gray-700"></p>
                        <p className="h-2 w-24 rounded-lg bg-gray-200 dark:bg-gray-700"></p>
                        <p className="h-2 w-24 rounded-lg bg-gray-200 dark:bg-gray-700"></p>
                        <p className="h-2 w-24 rounded-lg bg-gray-200 dark:bg-gray-700"></p>
                        <p className="h-2 w-24 rounded-lg bg-gray-200 dark:bg-gray-700"></p>
                    </div>
                </div>

                <hr className="my-6 border-gray-200 md:my-10 dark:border-gray-700" />

                <div className="flex flex-col items-center sm:flex-row sm:justify-between">
                    <p className="h-2 w-24 rounded-lg bg-gray-200 dark:bg-gray-700"></p>

                    <p className="h-2 w-64 rounded-lg bg-gray-200 dark:bg-gray-700"></p>
                </div>
            </div>
        </section>
    )
}
