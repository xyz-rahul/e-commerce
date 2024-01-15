'use client'

export default function Error({ error, reset }) {
    return (
        <div className="flex h-screen w-screen items-center justify-center text-black dark:bg-gray-600 dark:text-white">
            <div className="container mx-auto ">
                <div className="-mx-4 flex">
                    <div className="w-full px-4">
                        <div className="mx-auto max-w-[400px] text-center">
                            <h2 className="mb-2 text-[50px] font-bold leading-none text-black sm:text-[80px] md:text-[100px] dark:text-white">
                                {error.message}
                            </h2>
                            <h4 className="mb-3 text-[22px] font-semibold leading-tight text-black dark:text-white">
                                {error.code || ''}
                            </h4>
                            <p className="mb-8 text-lg text-black dark:text-white">
                                The page you are looking for it maybe deleted
                            </p>

                            <button
                                onClick={() => reset()}
                                className="hover:text-primary inline-block rounded-lg border border-white px-8 py-3 text-center text-base font-semibold text-black transition hover:bg-gray-200 hover:text-black dark:text-white"
                            >
                                Try again
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute left-0 top-0 -z-10 flex h-full w-full items-center justify-between space-x-5 p-6 md:space-x-8 lg:space-x-14">
                <div className="h-full w-1/3 bg-gradient-to-t from-[#FFFFFF14] to-[#C4C4C400]"></div>
                <div className="flex h-full w-1/3">
                    <div className="h-full w-1/2 bg-gradient-to-b from-[#FFFFFF14] to-[#C4C4C400]"></div>
                    <div className="h-full w-1/2 bg-gradient-to-t from-[#FFFFFF14] to-[#C4C4C400]"></div>
                </div>
                <div className="h-full w-1/3 bg-gradient-to-b from-[#FFFFFF14] to-[#C4C4C400]"></div>
            </div>
        </div>
    )
}
