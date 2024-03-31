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
            const response = await axios.post('/api/product', formData)

            if (response.status === 201 || response.status === 201200) {
                const productId = response.data?.productId
                window.location.replace(`product/${productId}`)
            } else {
                console.error('Failed to upload product')
            }
        } catch (error) {
            console.error('Error uploading product:', error)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="p-8 flex-col">
                <div className="p-2">
                    <label>
                        Name:
                        <input
                            type="text"
                            name="name"
                            value={product.name}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div className="p-2">
                    <label>
                        Description:
                        <input
                            type="text"
                            name="description"
                            value={product.description}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div className="p-2">
                    <label>
                        Price:
                        <input
                            type="number"
                            name="price"
                            value={product.price}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div className="p-2">
                    <label>
                        Stock Quantity:
                        <input
                            type="number"
                            name="stock_quantity"
                            value={product.stock_quantity}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div className="p-2">
                    <label>
                        Category:
                        <input
                            type="text"
                            name="category"
                            value={product.category}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div className="p-2">
                    <label>
                        Image:
                        <input
                            type="file"
                            accept=".jpg, .jpeg"
                            onChange={handleImageChange}
                        />
                    </label>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
