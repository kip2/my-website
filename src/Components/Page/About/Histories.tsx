import History from "./History"
import historyData from "../../../../public/json/HistoryData.json"

const Histories = () => {
    return (
        <>
            <div className="border-t border-white mb-20 mt-7 w-96 mx-auto"></div>
            <h1 className=" text-6xl mx-auto w-fit mb-14 max-md:text-4xl">
                History
            </h1>
            {historyData.map((history, index) => (
                <History key={index} id={history.page_address} age={history.age} title={history.title} text={history.text}/>
            ))}
        </>
    )
}

export default Histories