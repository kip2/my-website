import { Link } from "react-router-dom"
import { FavoritePageData } from "../../interface"

const FavoriteCard: React.FC<{data: FavoritePageData}> = ({ data }) => {

    return (
        <>
            <Link to={`/favorite/${data.id}`} className=" h-40 rounded-md border-2 border-slate-500 overflow-hidden 
                    hover:bg-slate-200/10 duration-500 hover:border-slate-200
                    max-[640px]:max-w-[368px] max-[640px]:min-w-[368px]
                    max-[390px]:min-w-[260px]
                ">
                <div className="h-full flex flex-col items-center px-3 pt-3 pb-4 bg-slate-300/10
                    max-[380px]:pb-2 max-[380px]:pt-2
                ">
                    <p className="h-1/2 text-lg font-bold font-serif mb-2
                        my-2 mx-2
                        flex items-center
                    ">
                        {data.title}
                    </p>
                    <p className="h-1/2 text-xs font-bold mx-1">
                        {data.caption}
                    </p>
                </div>
            </Link>
        </>
    )
}

export default FavoriteCard
