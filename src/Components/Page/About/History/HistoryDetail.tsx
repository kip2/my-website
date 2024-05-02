import { useParams } from "react-router-dom"
import { HistoryPageData } from "../../../interface"
import Header from "../../../UI/Header"
import Footer from "../../../UI/Footer"
import Blank from "../../../UI/Blanks/Blank"
import ReturnButton from "../../../UI/ReturnButton"
import { useEffect, useState } from "react"
import MarkdownViewer from "../../../Functions/MarkdownViewer"

const HistoryDetail = () => {
    const {id} = useParams<{ id?: string }>()
    const [historyData, setHistoryData] = useState<HistoryPageData | undefined>()

    const fetchData = async (id: string) => {
        const response = await fetch("/json/HistoryData.json")
        const histories = await response.json() as HistoryPageData[]
        const matchData = histories.find(history => history.id === id)
        setHistoryData(matchData)
    }

    useEffect(() => {
        if (id) {
            fetchData(id)
        }
    }, [id])


    if (!historyData) {
        return <div>No data ...</div>
    }

    return (
        <div>
            <Header />
            <Blank />
            <div className=" max-w-2xl mx-auto leading-8">
                <h1 className="text-center text-4xl my-8">{historyData.age} {historyData.title}</h1>
                <MarkdownViewer filepath={historyData.path} /> 
                <ReturnButton path="/about"/>
            </div>
            <Footer />
        </div>
    )
}

export default HistoryDetail