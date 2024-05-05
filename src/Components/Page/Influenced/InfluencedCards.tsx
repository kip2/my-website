import influencedData from "../../../../public/json/InfluencedData.json"
import React from "react"
import InfluencedCard from "./InfluencedCard"

interface InfluencedCardsProps {
    genre?: string,
    limit?: number
}

const InfluencedCards:React.FC<InfluencedCardsProps> = ({ genre, limit }) => {

    const filterInfluenced = genre ?
                        influencedData.filter(influenced => influenced.genre === genre)
                        :
                        influencedData

    const sortedInfluenced = filterInfluenced.sort((a, b) => {
        const dataA = new Date(a.published).getTime()
        const dataB = new Date(b.published).getTime()
        return dataB - dataA
    })

    const limitedInfluenced = limit ?
                        sortedInfluenced.slice(0, limit)
                        :
                        sortedInfluenced

    return (
        <>
            <div className="grid gap-4 grid-cols-3 mx-auto max-w-6xl 
                max-[920px]:grid-cols-2 
                max-sm:grid-cols-1 max-sm:justify-items-center
            ">
                {limitedInfluenced.length > 0 ? (
                    limitedInfluenced.map((data, index) => (
                        (index % 6 === 0) && (index !== 0)  ?
                            <React.Fragment key={index}>
                                <div className=" col-span-3 border-t border-white mb-7 mt-7 w-96 mx-auto max-md:col-span-2 max-sm:hidden"></div>
                                <InfluencedCard data={data}/>
                            </React.Fragment>
                            :
                                <InfluencedCard key={index} data={data}/>
                    )))
                    : (
                        <p>No influenced found in the selected category.</p>
                    )}
            </div>
        </>
    )
}

export default InfluencedCards