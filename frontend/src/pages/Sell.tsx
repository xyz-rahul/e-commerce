import axios from 'axios'
import { useState, ChangeEvent, FormEvent } from 'react'

interface Product {
    name: string
    description: string
    price: string
    stock_quantity: string
    category: string
    image: File | null
}

export default function Sell() {
    const [submitpending, setSubmitPending] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [product, setProduct] = useState<Product>({
        name: '',
        description: '',
        price: '',
        stock_quantity: '',
        category: '',
        image: null,
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setProduct({ ...product, [name]: value })
    }

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const image = e.target.files[0]
            setProduct({ ...product, image })
        }
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const formData = new FormData()
        formData.append('name', product.name)
        formData.append('description', product.description)
        formData.append('price', product.price)
        formData.append('stock_quantity', product.stock_quantity)
        formData.append('category', product.category)
        if (product.image) {
            formData.append('product_image', product.image)
        }
        try {
            setSubmitPending(true)
            const response = await axios.post('/api/product', formData)

            if (response.status === 201 || response.status === 201200) {
                const productId = response.data?.productId
                window.location.replace(`product/${productId}`)
            } else {
                console.error('Failed to upload product')
            }
            setSubmitPending(false)
        } catch (error: any) {
            setError('Error uploading product' + error.message)
            console.error('Error uploading product:', error)
        } finally {
            setSubmitPending(false)
        }
    }

    return (
        <div className="container mx-auto">
            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            >
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Name:
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            name="name"
                            value={product.name}
                            onChange={handleChange}
                            placeholder="Enter product name"
                        />
                    </label>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Description:
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            name="description"
                            value={product.description}
                            onChange={handleChange}
                            placeholder="Enter product description"
                        />
                    </label>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Price:
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="number"
                            name="price"
                            value={product.price}
                            onChange={handleChange}
                            placeholder="Enter product price"
                        />
                    </label>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Stock Quantity:
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="number"
                            name="stock_quantity"
                            value={product.stock_quantity}
                            onChange={handleChange}
                            placeholder="Enter stock quantity"
                        />
                    </label>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Category:
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            name="category"
                            value={product.category}
                            onChange={handleChange}
                            placeholder="Enter product category"
                        />
                    </label>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Image:
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="file"
                            accept=".jpg, .jpeg"
                            onChange={handleImageChange}
                        />
                    </label>
                </div>
                <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        className="inline-block rounded bg-sky-700 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white  transition duration-150 ease-in-out hover:bg-sky-500"
                        disabled={submitpending ? true : false}
                    >
                        {submitpending ? (
                            <>
                                <div
                                    className="inline-block h-4 w-4 mx-1 animate-spin rounded-full border-2 border-solid border-current border-e-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                                    role="status"
                                />
                                <span>Loading...</span>
                            </>
                        ) : (
                            <span>Submit</span>
                        )}
                    </button>
                </div>
            </form>
        </div>
    )
}
