import { Link } from "react-router-dom"

const Header = () => {
    return (
        <>
            <section className="flex justify-between pt-5 pb-3">
                <Link to="/" className="my-auto">
                    <div className="overflow-hidden whitespace-nowrap border-r-3 pr-0 border-black animate-typing
                        font-bold text-2xl font-mono
                        text-slate-200
                        hover:text-amber-400
                    ">
                        kip2.dev
                    </div>
                </Link>
                <div className="grid grid-cols-3 gap-4">
                    <Link to="/" className="grid justify-items-center text-xs 
                        hover:text-black hover:bg-slate-200 duration-300
                        rounded-md
                        px-1
                    ">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="40" height="40">
                            <rect width="256" height="256" fill="none"/>
                            <path d="M104,216V152h48v64h64V120a8,8,0,0,0-2.34-5.66l-80-80a8,8,0,0,0-11.32,0l-80,80A8,8,0,0,0,40,120v96Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
                        </svg>
                        <p>TOP</p>
                    </Link>
                    <Link to="/about" className="grid justify-items-center text-xs 
                        hover:text-black hover:bg-slate-200 duration-300
                        rounded-md
                        px-1
                    ">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="40" height="40">
                            <rect width="256" height="256" fill="none"/>
                            <line x1="32" y1="64" x2="32" y2="144" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
                            <path d="M56,216c15.7-24.08,41.11-40,72-40s56.3,15.92,72,40" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
                            <polygon points="224 64 128 96 32 64 128 32 224 64" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
                            <path d="M169.34,82.22a56,56,0,1,1-82.68,0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
                        </svg>
                        <p>ABOUT</p>
                    </Link>
                    <Link to="/products" className="grid justify-items-center text-xs 
                        hover:text-black hover:bg-slate-200 duration-300
                        rounded-md
                        px-1
                    ">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="40" height="40">
                            <rect width="256" height="256" fill="none"/>
                            <path d="M168,224H56a8,8,0,0,1-8-8V72a8,8,0,0,1,8-8h80l40,40V216A8,8,0,0,1,168,224Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M80,64V40a8,8,0,0,1,8-8h80l40,40V184a8,8,0,0,1-8,8H176" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="88" y1="152" x2="136" y2="152" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="88" y1="184" x2="136" y2="184" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
                        </svg>
                        <p>PRODUCTS</p>
                    </Link>
                </div>
            </section>
            <div className="border-t border-white mx-auto"></div>
        </>
    )
}

export default Header