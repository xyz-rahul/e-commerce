import SignOut from './SignOutButton'
import SignInButton from './SignInButton'
import { useAuth } from '../context/AuthContext'
import SellButton from './SellButton'
export default function Navbar() {
    const { user } = useAuth()

    return (
        <div>
            <header className="sticky top-0 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full border-b text-sm py-2.5 md:py-4 bg-slate-900 dark:border-gray-700">
                <nav
                    className="flex flex-nowrap basis-full items-center w-full mx-auto px-4 md:px-8 lg:max-w-[90rem]"
                    aria-label="Global"
                >
                    <a
                        className="flex-none text-white font-bold text-3xl rounded-md dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                        href="/"
                    >
                        ShopHub
                    </a>
                    <div className="flex items-center ms-auto md:w-full md:gap-x-3 md:order-3 md:ms-0">
                        <div className="relative group transition ms-auto">
                            {/* <form> */}
                            {/*     <div className="relative"> */}
                            {/*         <label */}
                            {/*             htmlFor="quick-search-orig" */}
                            {/*             className="block text-sm font-medium" */}
                            {/*         > */}
                            {/*             <span className="sr-only"> */}
                            {/*                 Quick search */}
                            {/*             </span> */}
                            {/*         </label> */}
                            {/*         <input */}
                            {/*             type="text" */}
                            {/*             name="quick-search" */}
                            {/*             id="quick-search-orig" */}
                            {/*             className="hidden md:block p-2 ps-10 pe-16 lg:min-w-[25rem] w-full border-gray-200 shadow-sm rounded-lg text-sm placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 transition group-hover:border-gray-300 bg-slate-700 dark:border-gray-700 dark:hover:border-gray-600 dark:text-gray-400 dark:placeholder:text-gray-500 dark:group-hover:border-gray-600 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" */}
                            {/*             placeholder="Quick search..." */}
                            {/*         /> */}
                            {/*     </div> */}
                            {/* </form> */}
                        </div>
                        <div className="flex gap-2 items-center relative z-10 ms-auto">
                            <SellButton />
                            {user ? (
                                <>
                                    <button className="inline-flex flex-shrink-0 justify-center items-center text-xl  font-bold rounded-full  hover:bg-gray-200 text-gray-200 dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"></button>
                                    <SignOut />
                                </>
                            ) : (
                                <SignInButton />
                            )}
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}
