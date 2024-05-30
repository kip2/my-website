import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { InfluencedPageData } from "../../interface"
import Header from "../../UI/Header/Header"
import Footer from "../../UI/Footer"
import Blank from "../../UI/Blanks/Blank"
import MarkdownViewer from "../../Functions/MarkdownViewer/MarkdownViewer"
import ReturnButton from "../../UI/ReturnButton"
import LongLine from "../../UI/Lines/LongLine"
import LittleBlank from "../../UI/Blanks/LittleBlank"
import Loading from "../../UI/Loading/Loading"

const InfluencedDetail = () => {
    const {id} = useParams<{ id?: string }>()
    const [influencedData, setInfluencedData] = useState<InfluencedPageData | undefined>()

    const fetchData = async (id: string) => {
        const response = await fetch("/json/InfluencedData.json")
        const influenced = await response.json() as InfluencedPageData[]
        const matchData = influenced.find(influenced => influenced.id === id)
        setInfluencedData(matchData)
    }

    useEffect(() => {
        if (id) {
            fetchData(id)
        }
    }, [id])


    if (!influencedData) {
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
                    {influencedData.title}
                </h1>
                <LongLine/>
                <LongLine/>
                <LittleBlank />
                <MarkdownViewer filepath={influencedData.path} /> 
                <ReturnButton path="/influenced"/>
            </div>
            <Footer />
        </div>
    )
}

export default InfluencedDetail