import { Link, useLocation } from "react-router-dom"
import { HistoryPageData } from "../interface"
import Header from "../../../UI/Header"
import Footer from "../../../UI/Footer"
import Blank from "../../../UI/Blank"

const HistoryDetail = () => {
    const location = useLocation()
    const data = location.state as HistoryPageData

    return (
        <div>
            <Header />
            <Blank />
            <div className=" max-w-2xl mx-auto leading-8">
                <h1 className="text-center text-4xl my-8">{data.age}、{data.title}</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, inventore fugit eum dolores reprehenderit illum labore iste recusandae debitis consectetur dicta saepe est? Quis, excepturi suscipit qui vitae nihil voluptates.
                </p>
                
                <div className="flex justify-center">
                    <Link to="/about">
                        <button className=" border-2 rounded-lg py-2 mt-5 text-xl w-48
                            flex justify-center
                            bg-gray-900
                            hover:bg-gray-500 transition duration-300 ease-in-out
                        ">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="32" height="32">
                                <rect width="256" height="256" fill="none"/>
                                <polyline points="80 120 32 168 80 216" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
                                <path d="M80,56h88a56,56,0,0,1,56,56h0a56,56,0,0,1-56,56H32" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
                            </svg>
                        </button>
                    </Link>
                </div>
            </div>


            <Footer />
        </div>
    )
}

export default HistoryDetail