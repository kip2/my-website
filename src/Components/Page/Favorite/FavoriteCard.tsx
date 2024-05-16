import { Link } from "react-router-dom"
import { FavoritePageData } from "../../interface"

const FavoriteCard: React.FC<{data: FavoritePageData}> = ({ data }) => {

    return (
        <>
            <Link to={`/favorite/${data.id}`} className=" h-60 rounded-md border-2 border-slate-500 overflow-hidden 
                    hover:bg-slate-200/10 duration-500 hover:border-slate-200
                    max-sm:max-w-[368px]
                ">
                <div className="h-1/2  overflow-clip">
                    <img className="h-full w-full object-cover overflow-hidden" src={data.imgUrl}></img>
                </div>
                <div className="h-1/2 flex flex-col items-center px-3 pt-3 pb-4 bg-slate-300/10
                    max-[380px]:pb-2 max-[380px]:pt-2
                ">
                    <p className="text-lg font-bold font-serif mb-2">
                        {data.title}
                    </p>
                    <p className=" text-xs font-bold">
                        {data.caption}
                    </p>
                </div>
            </Link>
        </>
    )
}

export default FavoriteCard
