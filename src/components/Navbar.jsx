import React from 'react'
import { auth, SignInButton, UserButton } from '@clerk/nextjs'
export default function Navbar() {
    const { userId } = auth()
    return (
        <header class="flex w-full flex-wrap bg-white py-4 text-sm sm:flex-nowrap sm:justify-start dark:bg-gray-800">
            <nav
                class="mx-auto flex w-full max-w-[85rem] basis-full flex-wrap items-center justify-between px-4"
                aria-label="Global"
            >
                <a
                    class="flex-none text-xl font-semibold sm:order-1 dark:text-white"
                    href="/"
                >
                    StudyApp
                </a>
                <div class="flex items-center gap-x-2 sm:order-3">
                    <button
                        type="button"
                        class="hs-collapse-toggle inline-flex items-center justify-center gap-x-2 rounded-lg border border-gray-200 bg-white p-2.5 text-gray-800 shadow-sm hover:bg-gray-50 disabled:pointer-events-none disabled:opacity-50 sm:hidden dark:border-gray-700 dark:bg-transparent dark:text-white dark:hover:bg-white/10 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                        data-hs-collapse="#navbar-alignment"
                        aria-controls="navbar-alignment"
                        aria-label="Toggle navigation"
                    >
                        <svg
                            class="hs-collapse-open:hidden h-4 w-4 flex-shrink-0"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <line x1="3" x2="21" y1="6" y2="6" />
                            <line x1="3" x2="21" y1="12" y2="12" />
                            <line x1="3" x2="21" y1="18" y2="18" />
                        </svg>
                        <svg
                            class="hs-collapse-open:block hidden h-4 w-4 flex-shrink-0"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <path d="M18 6 6 18" />
                            <path d="m6 6 12 12" />
                        </svg>
                    </button>

                    {userId ? (
                        <UserButton
                            afterSignOutUrl="/"
                            className="inline-flex items-center gap-x-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-800 shadow-sm hover:bg-gray-50 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-slate-900 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                        />
                    ) : (
                        <SignInButton className="inline-flex items-center gap-x-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-800 shadow-sm hover:bg-gray-50 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-slate-900 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" />
                    )}
                </div>
                <div
                    id="navbar-alignment"
                    class="hs-collapse hidden grow basis-full overflow-hidden transition-all duration-300 sm:order-2 sm:block sm:grow-0 sm:basis-auto"
                >
                    <div class="mt-5 flex flex-col gap-5 sm:mt-0 sm:flex-row sm:items-center sm:ps-5">
                        <a
                            class="font-medium text-gray-600 hover:text-blue-400 dark:text-gray-400 dark:hover:text-blue-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                            href="/"
                        >
                            Home
                        </a>
                        <a
                            class="font-medium text-gray-600 hover:text-blue-400 dark:text-gray-400 dark:hover:text-blue-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                            href="/about"
                        >
                            About
                        </a>
                    </div>
                </div>
            </nav>
        </header>
    )
}
