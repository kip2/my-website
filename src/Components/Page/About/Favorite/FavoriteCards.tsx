import FavoriteCard from "../../Favorite/FavoriteCard"
import favoriteData from "../../../../../public/json/FavoriteData.json"
import React from "react"
import SeeAllPageLinkCard from "../../../UI/SeeAllPageLinkCard"

interface FavoriteCardsProps {
    genre?: string,
    limit?: number
}

const FavoriteCards:React.FC<FavoriteCardsProps> = ({ genre, limit }) => {

    const filterFavorites = genre ?
                        favoriteData.filter(favorite => favorite.genre === genre)
                        :
                        favoriteData

    const sortedFavorites = filterFavorites.sort((a, b) => {
        const dataA = new Date(a.published).getTime()
        const dataB = new Date(b.published).getTime()
        return dataB - dataA
    })

    const limitedFavorites = limit ?
                        sortedFavorites.slice(0, limit)
                        :
                        sortedFavorites

    return (
        <>
            <div className="grid gap-4 grid-cols-3 mx-auto max-w-6xl 
                max-[920px]:grid-cols-2 
                max-sm:grid-cols-1 max-sm:justify-items-center
            ">
                {limitedFavorites.length > 0 ? (
                    limitedFavorites.map((data, index) => (
                        (index % 6 === 0) && (index !== 0)  ?
                            <React.Fragment key={index}>
                                <div className=" col-span-3 border-t border-white mb-7 mt-7 w-96 mx-auto max-md:col-span-2 max-sm:hidden"></div>
                                <FavoriteCard data={data} />
                            </React.Fragment>
                            :
                                <FavoriteCard key={index} data={data} />
                    )))
                    : (
                        <p>No Favorites found in the selected category.</p>
                    )}
                <SeeAllPageLinkCard url="/favorite" title="See All Favorites" subtitle="すべてのお気に入りを見る"/>
            </div>
        </>
    )
}

export default FavoriteCards