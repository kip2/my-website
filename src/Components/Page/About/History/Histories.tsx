import History from "./History"
import historyData from "../../../../../public/json/HistoryData.json"
import React from "react"
import Title from "../../../UI/Title"

const Histories = () => {
    return (
        <>
            <Title
                title="History"
                subTitle="プログラミング遍歴"
                linkId="History"
            />
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