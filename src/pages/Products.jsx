import React, { useContext, useEffect } from 'react'
import ProvideContext from '../context/ProviderContext'

function Products() {
 
    const { productsData,sun, handleProducts } = useContext(ProvideContext)

    useEffect(() => {
        handleProducts()
    }, [])

    return (
        <div className={`  p-4 shadow-lg ${sun ? "bg-black text-white " :"bg-white "}`} >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {productsData.map((product) => (
                    <div
                        key={product.id}
                        className="bg-transparent shadow-md rounded-lg overflow-hidden"
                    >
                        <img
                            src={product.image}
                            alt={product.title}
                            className="w-full h-40 object-contain"
                        />
                        <div className="p-4">
                            <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
                            <p className="text-gray-600 mb-1">Category: {product.category}</p>
                            <p className="text-gray-800 font-bold mb-1">
                                Price: ${product.price}
                            </p>
                            <p className="text-gray-600 mb-2">
                                Rating: {product.rating.rate} ⭐ ({product.rating.count} reviews)
                            </p>
                            <p className="text-gray-600 text-sm">{product.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Products