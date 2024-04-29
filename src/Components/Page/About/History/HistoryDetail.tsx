import { useParams } from "react-router-dom"
import { HistoryPageData } from "../interface"
import Header from "../../../UI/Header"
import Footer from "../../../UI/Footer"
import Blank from "../../../UI/Blank"
import componentMap from "../../../ComponentMap"
import ReturnButton from "../../../UI/ReturnButton"
import { useEffect, useState } from "react"

const HistoryDetail = () => {
    const {id} = useParams<{ id?: string }>()
    const [data, setData] = useState<HistoryPageData | undefined>()

    const fetchData = async (id: string) => {
        const response = await fetch("/src/json/HistoryData.json")
        const histories = await response.json() as HistoryPageData[]
        const matchData = histories.find(history => history.id.toString() === id)
        setData(matchData)
    }

    useEffect(() => {
        if (id) {
            fetchData(id)
        }
    }, [id])


    if (!data) {
        return <div>No data ...</div>
    }

    const PageName = componentMap[data.component]

    return (
        <div>
            <Header />
            <Blank />
            <div className=" max-w-2xl mx-auto leading-8">
                <h1 className="text-center text-4xl my-8">{data.age} {data.title}</h1>
                <PageName />

                <ReturnButton path="/about"/>
            </div>
            <Footer />
        </div>
    )
}

export default HistoryDetail