import { useParams } from "react-router-dom"
import { useLocation } from "react-router-dom"
import { HistoryPageData } from "./interface"

const HistoryDetail = () => {
    const { id } = useParams()
    const location = useLocation()
    const data = location.state as HistoryPageData

    return (
        <div>
            <h1>HistoryDetail</h1>
            <p>ID: {id}</p>
            <p>age: {data.age}</p>
            <p>title: {data.title}</p>
            <p>text: {data.text}</p>
            <p>detail title: {data.detail.title}</p>
            <p>detail text: {data.detail.text}</p>
        </div>
    )
}

export default HistoryDetail