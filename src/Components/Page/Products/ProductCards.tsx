import ProductCard from "./ProductCard"
import productsData from "../../../../public/json/ProductsData.json"
import React from "react"
import { ProductPageData } from "../../types"

interface ProductCardsProps {
    genre?: string,
    limit?: number
}

const ProductCards:React.FC<ProductCardsProps> = ({ genre, limit }) => {
    const products: ProductPageData[] = productsData as ProductPageData[]

    const filterProducts = genre ?
                        products.filter(product => product.genre === genre)
                        :
                        products

    const sortedProducts = filterProducts.sort((a, b) => {
        const dataA = new Date(a.created).getTime()
        const dataB = new Date(b.created).getTime()
        return dataB - dataA
    })

    const limitedProducts = limit ?
                        sortedProducts.slice(0, limit)
                        :
                        sortedProducts

    return (
        <>
            <div className="grid gap-4 grid-cols-3 mx-auto max-w-6xl 
                max-[920px]:grid-cols-2 
                max-sm:grid-cols-1 max-sm:justify-items-center
            ">
                {limitedProducts.length > 0 ? (
                    limitedProducts.map((data, index) => (
                        (index % 6 === 0) && (index !== 0)  ?
                            <React.Fragment key={index}>
                                <div className=" col-span-3 border-t border-white mb-7 mt-7 w-96 mx-auto max-[920px]:col-span-2  max-sm:hidden"></div>
                                <ProductCard data={data} />
                            </React.Fragment>
                            :
                                <ProductCard key={index} data={data} />
                    )))
                    : (
                        <p>No products found in the selected category.</p>
                    )}
            </div>
        </>
    )
}

export default ProductCards