import ProductCard from "./ProductCard"
import procudtData from "../../../../public/json/Products.json"

const ProductCards = () => {
    return (
        <>
            <div className="grid gap-4 grid-cols-3 mx-auto max-w-6xl 
                max-md:grid-cols-2 
                max-sm:grid-cols-1 max-sm:justify-items-center
            ">
                {procudtData.map((data, index) => (
                    <ProductCard
                        key={index}
                        imgUrl={data.imgUrl}
                        title={data.title}
                        caption={data.caption}
                    />
                ))}
            </div>
        </>
    )
}

export default ProductCards