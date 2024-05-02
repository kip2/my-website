import { Link } from "react-router-dom"

interface ReturnButtonProps  {
    path: string,
}

const ReturnButton: React.FC<ReturnButtonProps> = ({ path }) => {
    return (
        <>
            <div className="flex justify-center">
                <Link to={path}>
                    <button className=" border-2 rounded-lg py-2 mt-5 text-xl w-48
                        flex justify-center
                        bg-gray-900
                        hover:text-black hover:bg-slate-200 duration-300
                        hover:border-black
                    ">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="32" height="32">
                            <rect width="256" height="256" fill="none"/>
                            <polyline points="80 120 32 168 80 216" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
                            <path d="M80,56h88a56,56,0,0,1,56,56h0a56,56,0,0,1-56,56H32" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
                        </svg>
                    </button>
                </Link>
            </div>
        </>
    )
}

export default ReturnButton