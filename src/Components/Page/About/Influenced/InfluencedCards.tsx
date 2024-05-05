import InfluencedCard from "./InfluencedCard"
import producttData from "../../../../../public/json/ProductsData.json"
import React from "react"
import SeeAllPageLinkCard from "../../../UI/SeeAllPageLinkCard"

interface ProductCardsProps {
    genre?: string,
    limit?: number
}

const InfluencedCards:React.FC<ProductCardsProps> = ({ genre, limit }) => {

    const filterProducts = genre ?
                        producttData.filter(product => product.genre === genre)
                        :
                        producttData

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
                                <div className=" col-span-3 border-t border-white mb-7 mt-7 w-96 mx-auto max-md:col-span-2 max-sm:hidden"></div>
                                <InfluencedCard data={data} />
                            </React.Fragment>
                            :
                                <InfluencedCard key={index} data={data} />
                    )))
                    : (
                        <p>No products found in the selected category.</p>
                    )}
                <SeeAllPageLinkCard url="/products" title="See All Influenced" subtitle="すべての影響を受けたものを見る"/>
            </div>
        </>
    )
}

export default InfluencedCards