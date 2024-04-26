import { useParams } from "react-router-dom"

const HistoryDetail = () => {
    const { id } = useParams()

    return (
        <div>
            <h1>HistoryDetail</h1>
            <p>ID: {id}</p>
        </div>
    )
}

export default HistoryDetail