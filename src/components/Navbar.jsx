import React from 'react'

export default function Navbar() {
    return (
        <div className="flex flex-row justify-between bg-white text-lg dark:bg-gray-700 dark:text-gray-100">
            <div className="flex flex-row  items-center">
                <div className="px-4 py-2 font-bold">StudyAPP</div>
                <div className="px-4 py-2">Home</div>
                <div className="px-4 py-2">About</div>
            </div>
            <div className="flex flex-row  items-center px-4 py-2">
                <input
                    type="text"
                    className="rounded-md p-2 text-sm text-black"
                />
            </div>
        </div>
    )
}
