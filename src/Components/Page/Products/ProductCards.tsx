import ProductCard from "./ProductCard"
import producttData from "../../../../public/json/ProductsData.json"


const ProductCards = () => {
    return (
        <>
            <div className="grid gap-4 grid-cols-3 mx-auto max-w-6xl 
                max-md:grid-cols-2 
                max-sm:grid-cols-1 max-sm:justify-items-center
            ">
                {producttData.map((data, index) => (
                    (index % 6 === 0) && (index !== 0)  ?
                        <>
                            <div className=" col-span-3 border-t border-white mb-7 mt-7 w-96 mx-auto max-md:col-span-2 max-sm:hidden"></div>
                            <ProductCard
                                key={index}
                                data={data}
                            />
                        </>
                        :
                            <ProductCard
                                key={index}
                                data={data}
                            />
                ))}
            </div>
        </>
    )
}

export default ProductCards