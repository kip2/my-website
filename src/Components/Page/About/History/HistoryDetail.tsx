import { Link, useLocation } from "react-router-dom"
import { HistoryPageData } from "../interface"
import Header from "../../../UI/Header"
import Footer from "../../../UI/Footer"

const HistoryDetail = () => {
    const location = useLocation()
    const data = location.state as HistoryPageData

    return (
        <div>
            <Header />
            {/* メモ用 */}
            <p>detail title: {data.detail.title}</p>
            <p>detail text: {data.detail.text}</p>

            <div className=" max-w-2xl mx-auto leading-8">
                <h1 className="text-center text-4xl my-8">{data.age}、{data.title}</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, inventore fugit eum dolores reprehenderit illum labore iste recusandae debitis consectetur dicta saepe est? Quis, excepturi suscipit qui vitae nihil voluptates.
                </p>
                <div className="flex justify-center">
                    <Link to="/about">
                        <button className=" border-2 rounded-lg py-2 mt-5 text-xl w-48
                            hover:bg-gray-600 transition duration-300 ease-in-out
                        ">
                            戻る
                        </button>
                    </Link>
                </div>
            </div>


            <Footer />
        </div>
    )
}

export default HistoryDetail