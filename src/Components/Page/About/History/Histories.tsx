import History from "./History"
import historyData from "../../../../../public/json/HistoryData.json"
import React from "react"

const Histories = () => {
    return (
        <>
            <h1 id="History" className=" text-6xl mx-auto w-fit mb-14 max-md:text-4xl">
                History
            </h1>
            <div className="grid place-items-center">
            {historyData.map((data, index) => (
                index === 0 ?
                    <History key={index} data={data}/>
                    :
                    <React.Fragment key={index}>
                        <div className="border-r border-4 border-gray-600 mx-auto  h-5 my-1"></div>
                        <History key={index} data={data}/>
                    </React.Fragment>
            ))}
            </div>
        </>
    )
}

export default Histories