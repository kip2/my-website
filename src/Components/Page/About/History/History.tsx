import { useNavigate } from "react-router-dom"
import { HistoryPageData} from "../interface"

const History: React.FC< {data: HistoryPageData}> = ({data}) => {
    const navigate = useNavigate()
    
    const goToDetailPage = (data: HistoryPageData) => {
        navigate(`/about/history/detail/${data.id}`, { state:  data })
    }

    return (
        <>
            <section className="flex justify-center mt-5">
                <div onClick={() => goToDetailPage(data)} className="flex justify-start w-210 max-lg:w-144 max-md:w-128 max-md:text-base text-2xl border-2 bg-gray-400/10  border-gray-700 rounded-md px-6 py-4
                hover:bg-gray-600 transition duration-300 ease-in-out
                ">
                    <p className="italic my-auto max-md:text-xs text-sm text-gray-400 mr-5">{data.age}</p>
                    <p className="my-auto italic">{data.title}</p>
                </div>
            </section>
        </>
    )
}

export default History