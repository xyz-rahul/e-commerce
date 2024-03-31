import { FaCartShopping } from 'react-icons/fa6'

export default function JobCard({
    id,
    title,
    url,
    price,
}: {
    id: string
    title: string
    url: string
    price: string
}) {
    return (
        <div>
            <div className="w-[300px] h-[500px] hover:scale-110 ease-linear transition my-10 flex flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
                <a
                    className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
                    href={`product/${id}`}
                >
                    <img
                        className="peer absolute top-0 right-0 h-full w-full object-cover"
                        src={url}
                        alt="product image"
                    />
                </a>
                <div className="mt-4 px-5 pb-5">
                    <a href="#">
                        <h5 className="text-xl font-bold tracking-tight text-slate-900">
                            {title}
                        </h5>
                    </a>
                    <div className="mt-2 mb-5 flex items-center justify-between">
                        <h1 className="mt-2 mb-5 items-center justify-between text-3xl font-bold text-slate-900">
                            Rs {price}
                        </h1>
                    </div>
                    <a
                        href="#"
                        className="flex my-2 items-center bg-sky-700 justify-center rounded-md px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-sky-600 focus:outline-none focus:ring-4 focus:ring-blue-300"
                    >
                        <FaCartShopping />
                        Add to cart
                    </a>
                    <a
                        href="#"
                        className="flex my-2 items-center bg-green-700 justify-center rounded-md px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-blue-300"
                    >
                        <FaCartShopping />
                        Buy Now
                    </a>
                </div>
            </div>
        </div>
    )
}
