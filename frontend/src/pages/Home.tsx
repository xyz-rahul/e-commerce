import axios from 'axios'
import { useEffect, useState } from 'react'
import JobCard from '../components/JobCard'

export default function Home() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios
            .get('/api/product')
            .then((response) => {
                setProducts(response.data)
            })
            .catch((error) => {
                console.error('Error fetching products:', error)
            })
    }, [])
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {products.map((product: any, index) => (
                    <div key={index} className="mx-auto">
                        <JobCard
                            key={product.product_id}
                            id={product.product_id}
                            title={product.name}
                            url={product.thumbnail_url}
                            price={product.price}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}
