import { useNavigate } from "react-router-dom"
import { HistoryPageData} from "../../../interface"

const History: React.FC< {data: HistoryPageData}> = ({data}) => {
    const navigate = useNavigate()
    
    const goToDetailPage = (data: HistoryPageData) => {
        navigate(`/about/history/detail/${data.id}`)
    }

    return (
        <>
            <section className="grid items-center">
                <div onClick={() => goToDetailPage(data)} className="flex justify-start 
                    w-190 max-lg:w-144 max-md:w-128 max-sm:w-96 max-[470px]:w-72
                    text-xl 
                    border-2 bg-gray-400/10  border-gray-700 rounded-md 
                    px-6 py-4
                    hover:bg-gray-600 transition duration-500 ease-in-out
                    hover:border-slate-200
                ">
                    <p className="italic my-auto max-md:text-xs text-sm text-gray-400 mr-5">{data.age}</p>
                    <p className="my-auto italic">{data.title}</p>
                </div>
            </section>
        </>
    )
}

export default History