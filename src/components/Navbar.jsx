import React from 'react'
import { UserButton } from '@clerk/nextjs'
import { SignInButton } from '@clerk/nextjs'
import { auth } from '@clerk/nextjs'

export default function Navbar() {
    const { userId } = auth()
    return (
        <div className="flex flex-row justify-between bg-white text-lg dark:bg-gray-700 dark:text-gray-100">
            <div className="flex flex-row  items-center">
                <div className="px-4 py-2 font-bold">StudyAPP</div>
                <div className="px-4 py-2">
                    <a href="/">Home</a>
                </div>
                <div className="px-4 py-2">
                    <a href="/about">About</a>
                </div>
            </div>
            <div className="mx-4 flex  flex-row items-center justify-end px-4 py-2">
                <input
                    type="text"
                    className="rounded-md p-2 text-sm text-black"
                />
                <div className="ml-4">
                    {userId ? (
                        <UserButton afterSignOutUrl="/" />
                    ) : (
                        <SignInButton className="rounded-md bg-blue-500 p-2 text-sm font-bold" />
                    )}
                </div>
            </div>
        </div>
    )
}
