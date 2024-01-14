import React from 'react'

export default function page() {
    return (
        <div className="flex min-h-screen items-center justify-center dark:bg-gray-900">
            <div className="rounded bg-white p-8 shadow-md">
                <h1 className="mb-4 text-2xl font-bold">StudyApp</h1>
                <p className="text-gray-600">
                    Welcome to StudyApp - your gateway to learning and
                    educational excellence.
                </p>
                <div className="mt-4">
                    <p className="text-gray-700">
                        Explore a wide range of courses taught by industry
                        experts.
                    </p>
                    <p className="text-gray-700">
                        Enhance your skills, advance your career, and embrace
                        continuous learning.
                    </p>
                </div>
                <div className="mt-6">
                    <button className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
                        Get Started
                    </button>
                </div>
                <p className="mt-4 text-sm text-gray-500">
                    Join StudyApp today and embark on your educational journey!
                </p>
            </div>
        </div>
    )
}
