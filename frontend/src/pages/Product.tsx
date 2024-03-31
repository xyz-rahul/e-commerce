import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Product() {
    const [product, setProduct] = useState(null)
    const { id } = useParams()
    useEffect(() => {
        axios
            .get(`/api/product/${id}`)
            .then((res) => res.data)
            .then((data) => {
                console.log(data)
                return data
            })
            .then((data) => setProduct(data))
    }, [])
    return (
        <div>
            <section className="text-gray-700 body-font overflow-hidden bg-white">
                <div className="container px-5 py-24 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <img
                            className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
                            src={product?.thumbnail_url}
                            alt="thumbnail url"
                        />
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h2 className="text-sm title-font text-gray-500 tracking-widest">
                                {product?.category}
                            </h2>
                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                                {product?.name}
                            </h1>
                            <h1 className="text-gray-500 text-xl title-font font-medium mb-1">
                                Product Description
                            </h1>
                            <p className="leading-relaxed">
                                {product?.description}
                            </p>
                            <h1 className="title-font font-medium text-2xl text-gray-900">
                                Rs {product?.price}
                            </h1>
                            <h1 className="text-gray-500 text-xl title-font font-medium mb-1">
                                Quantity: {product?.stock_quantity}
                            </h1>
                            <div className="flex justify-center">
                                <button className="flex my-auto text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-sky-600 rounded">
                                    Buy
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
