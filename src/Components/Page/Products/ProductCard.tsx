interface ProductCardProps {
    imgUrl: string,
    title: string,
    caption: string,
}

const ProductCard: React.FC<ProductCardProps> = ({ imgUrl, title, caption }) => {
    return (
        <>
            <div className="h-50 rounded-md border-2 border-slate-500 overflow-hidden 
                    hover:bg-slate-200/10 duration-500 hover:border-slate-200
                ">
                <div className="h-3/5 max-sm:h-2/3">
                    <img className="w-full h-full object-cover" src={imgUrl}></img>
                </div>
                <div className="h-2/5 max-sm:h-1/3 flex flex-col p-2 bg-slate-300/10 ">
                    <h2 className="mx-auto text-sm font-semibold pb-1 overflow-hidden
                        max-sm:pb-2
                    ">
                        {title}
                    </h2>
                    <p className="mx-auto text-xs overflow-hidden whitespace-nowrap">
                        {/* 40 character limit */}
                        {caption}
                    </p>
                </div>
            </div>
        </>
    )
}

export default ProductCard