import { useNavigate } from "react-router-dom"
import { ProductPageData } from "../../interface"

const ProductCard: React.FC<{data: ProductPageData}> = ({ data }) => {
    const navigate = useNavigate()

    const goToProductPage = (data: ProductPageData) => {
        navigate(`/products/${data.id}`)
    }

    return (
        <>
            <div onClick={() => goToProductPage(data)} className=" h-80 rounded-md border-2 border-slate-500 overflow-hidden 
                    hover:bg-slate-200/10 duration-500 hover:border-slate-200
                    max-sm:max-w-[368px]
                ">
                <div className="h-3/5 max-sm:h-2/3">
                    <img className="h-full w-full object-cover overflow-hidden" src={data.imgUrl}></img>
                </div>
                <div className="h-2/5 max-sm:h-1/3 flex flex-col px-3 pt-3 pb-4 bg-slate-300/10
                    max-[380px]:pb-2 max-[380px]:pt-2
                ">
                    <div className="h-1/2 flex items-center justify-center">
                        <h2 className="text-center text-lg font-bold 
                            font-serif italic
                        ">
                            {data.title}
                        </h2>
                    </div>
                    <div className="h-1/2 text-center">
                        <p className="mx-auto text-xs mt-3 mb-2 
                            max-[380px]:mt-1 max-[380px]:mb-1
                        ">
                            {/* 40 character limit */}
                            {data.caption}
                        </p>
                        <p className="mx-auto text-xs
                            text-slate-400 opacity-80
                        ">
                            {data.created}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductCard