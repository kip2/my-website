import { Link } from "react-router-dom"

const GoAllFavoriteCard= () => {
    return (
        <>
            <Link to="/products" className=" h-80 rounded-md border-2 border-slate-500 overflow-hidden 
                    hover:bg-slate-200/10 duration-500 hover:border-slate-200
                    max-sm:max-w-[368px]
                    flex flex-col items-center  justify-center
                    w-full
                ">
                <p className="text-2xl font-serif italic">See all Favorites</p>
                <p> 〜 すべてのお気に入りをみる 〜</p>
            </Link>
        </>
    )
}

export default GoAllFavoriteCard
