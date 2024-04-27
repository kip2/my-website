import {  useLocation } from "react-router-dom"
import { HistoryPageData } from "../interface"
import Header from "../../../UI/Header"
import Footer from "../../../UI/Footer"
import Blank from "../../../UI/Blank"
import componentMap from "../../../ComponentMap"
import ReturnButton from "../../../UI/ReturnButton"

const HistoryDetail = () => {
    const location = useLocation()
    const data = location.state as HistoryPageData
    const PageName = componentMap[data.component]

    return (
        <div>
            <Header />
            <Blank />
            <div className=" max-w-2xl mx-auto leading-8">
                <h1 className="text-center text-4xl my-8">{data.age}、{data.title}</h1>
                <PageName />

                <ReturnButton path="/about"/>
            </div>
            <Footer />
        </div>
    )
}

export default HistoryDetail