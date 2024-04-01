import axios from 'axios'
import { useEffect, useState } from 'react'
import JobCard from '../components/JobCard'
import { useSearchParams } from 'react-router-dom'

export default function Home() {
    const [totalProducts, setTotalProducts] = useState(0)
    const [products, setProducts] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [pageSize, setPageSize] = useState(8)

    const [, setSearchParams] = useSearchParams()

    useEffect(() => {
        fetchProducts()
    }, [currentPage, pageSize])

    const fetchProducts = async () => {
        const params = {
            page: currentPage.toString(),
            size: pageSize.toString(),
        }
        setSearchParams(params)

        try {
            const response = await axios.get('/api/product', {
                params: {
                    page: currentPage,
                    size: pageSize,
                },
            })
            const { totalProducts, products } = response.data
            setTotalProducts(totalProducts)
            setProducts(products)
        } catch (error) {
            console.error('Error fetching products:', error)
        }
    }

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
            <div className="flex justify-center p-2">
                <div className="flex gap-2 font-mono">
                    {currentPage > 1 && (
                        <>
                            <button
                                className="h-8 w-16 bg-gray-200 font-medium hover:bg-slate-500 hover:text-white rounded-md"
                                onClick={() => setCurrentPage(currentPage - 1)}
                            >
                                Prev
                            </button>
                            <button
                                className="h-8 w-8 bg-gray-200 font-medium hover:bg-slate-500 hover:text-white rounded-md"
                                onClick={() => setCurrentPage(currentPage - 1)}
                            >
                                {currentPage - 1}
                            </button>
                        </>
                    )}
                    <button className="h-8 w-8 bg-gray-500 font-medium text-white rounded-md">
                        {currentPage}
                    </button>
                    {currentPage * pageSize < totalProducts && (
                        <>
                            <button
                                className="h-8 w-8 bg-gray-200 font-medium hover:bg-slate-500 hover:text-white rounded-md"
                                onClick={() => setCurrentPage(currentPage + 1)}
                            >
                                {currentPage + 1}
                            </button>
                            <button
                                className="h-8 w-16 bg-gray-200 font-medium hover:bg-slate-500 hover:text-white rounded-md"
                                disabled={
                                    currentPage * pageSize >= totalProducts
                                }
                                onClick={() => setCurrentPage(currentPage + 1)}
                            >
                                Next
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}
