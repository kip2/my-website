import History from "./History"
import historyData from "../../../../../public/json/HistoryData.json"

const Histories = () => {
    return (
        <>
            <h1 className=" text-6xl mx-auto w-fit mb-14 max-md:text-4xl">
                History
            </h1>
            <div className="grid place-items-center">
            {historyData.map((history, index) => (
                index === 0 ?
                    <History key={index} data={history}/>
                    :
                    <>
                    <div className="border-r border-4 border-gray-600 mx-auto  h-11 my-1"></div>
                    <History key={index} data={history}/>
                    </>
            ))}
            </div>
        </>
    )
}

export default Histories