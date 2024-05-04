import { useNavigate } from "react-router-dom"
import { ProductPageData } from "../../interface"

const ProductCard: React.FC<{data: ProductPageData}> = ({ data }) => {
    const navigate = useNavigate()

    const goToProductPage = (data: ProductPageData) => {
        navigate(`/products/${data.id}`)
    }

    return (
        <>
            <div onClick={() => goToProductPage(data)} className="h-50 rounded-md border-2 border-slate-500 overflow-hidden 
                    hover:bg-slate-200/10 duration-500 hover:border-slate-200
                ">
                <div className="h-3/5 max-sm:h-2/3">
                    <img className="w-full h-full object-cover" src={data.imgUrl}></img>
                </div>
                <div className="h-2/5 max-sm:h-1/3 flex flex-col px-3 pt-3 pb-3 bg-slate-300/10
                    max-[380px]:pb-2 max-[380px]:pt-2
                ">
                    <h2 className="mx-auto text-sm font-semibold pb-2 overflow-hidden
                        max-sm:pb-2
                    ">
                        {data.title}
                    </h2>
                    <p className="mx-auto text-xs mt-2 mb-2 overflow-hidden whitespace-nowrap
                        max-[380px]:mt-1 max-[380px]:mb-1
                    ">
                        {/* 40 character limit */}
                        {data.caption}
                    </p>
                </div>
            </div>
        </>
    )
}

export default ProductCard