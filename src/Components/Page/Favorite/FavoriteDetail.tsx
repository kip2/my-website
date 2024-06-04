import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { FavoritePageData } from "../../types"
import Header from "../../UI/Header/Header"
import Footer from "../../UI/Footer"
import Blank from "../../UI/Blanks/Blank"
import MarkdownViewer from "../../Functions/MarkdownViewer/MarkdownViewer"
import ReturnButton from "../../UI/ReturnButton"
import LongLine from "../../UI/Lines/LongLine"
import LittleBlank from "../../UI/Blanks/LittleBlank"
import Loading from "../../UI/Loading/Loading"

const FavoriteDetail = () => {
    const {id} = useParams<{ id?: string }>()
    const [favoriteData, setFavoriteData] = useState<FavoritePageData | undefined>()

    const fetchData = async (id: string) => {
        const response = await fetch("/json/FavoriteData.json")
        const farovites = await response.json() as FavoritePageData[]
        const matchData = farovites.find(favorite => favorite.id === id)
        setFavoriteData(matchData)
    }

    useEffect(() => {
        if (id) {
            fetchData(id)
        }
    }, [id])


    if (!favoriteData) {
        return <Loading />
        
    }

    return (
        <div>
            <Header />
            <Blank />
            <div className=" max-w-2xl mx-auto leading-8">
                <h1 className="text-center text-5xl my-8
                    font-serif italic font-bold
                    max-md:text-4xl
                    max-sm:text-3xl
                ">
                    {favoriteData.title}
                </h1>
                <LongLine/>
                <LongLine/>
                <LittleBlank />
                <MarkdownViewer filepath={favoriteData.path} /> 
                <ReturnButton path="/favorite"/>
            </div>
            <Footer />
        </div>
    )
}

export default FavoriteDetail