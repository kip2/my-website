import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import HeaderButton from "./HeaderButton"
import HeaderHumbergerMenu from "./HeaderHumbergerMenu"
import "./Header.css"
import SiteMap from "../Modals/Sitemap/SiteMap"
import ScrollToTopButton from "../ScrollToTopButton"

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [modalOpen, setModalOpen] = useState(false)

    const openModal = () => {
        setModalOpen(true)
    }

    const closeModal = () => {
        setModalOpen(false)
    }


    useEffect(() => {
        function handleResize() {
            if (window.innerWidth > 768) {
                setIsOpen(false)
            }
        }
        window.addEventListener("resize", handleResize)
        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])
    
    return (
        <>
            {isOpen && (
                <div className="overlay" onClick={() => setIsOpen(false)}></div>
            )}
            <section className="flex justify-between max-md:justify-center pt-5 pb-3">
                <Link to="/about-site" className="my-auto">
                    <div className="logo
                        overflow-hidden whitespace-nowrap border-r-3  border-black animate-typing
                        font-serif font-black italic tracking-wide
                        text-2xl pl-3 pr-2 
                        text-slate-200 duration-500 hover:text-black
                    ">
                        kip2.dev
                    </div>
                </Link>
                <button onClick={() => setIsOpen(!isOpen)} className={`md:hidden fixed left-7 top-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width={40} height={40}>
                        <rect width="256" height="256" fill="none"/>
                        <line x1="40" y1="128" x2="216" y2="128" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
                        <line x1="40" y1="64" x2="216" y2="64" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
                        <line x1="40" y1="192" x2="216" y2="192" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
                    </svg>
                </button>
                <div className={`fixed-menu fixed top-0 left-0 h-full bg-slate-900 opacity-85 shadow-md px-3 transition-transform duration-300 z-[9999]  ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
                    <div className="flex justify-center my-5">
                        <div onClick={() => setIsOpen(false)} className="hover:text-black hover:bg-slate-200 duration-500 px-10 py-1 rounded-md">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width={30} height={30}>
                                <rect width="256" height="256" fill="none"/>
                                <rect x="40" y="40" width="176" height="176" rx="8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
                                <line x1="160" y1="96" x2="96" y2="160" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
                                <line x1="96" y1="96" x2="160" y2="160" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
                            </svg>
                        </div>
                    </div>
                    <HeaderHumbergerMenu openModal={openModal}/>
                </div>
                <HeaderButton openModal={openModal}/>
                {modalOpen && (
                    <>
                        <div className="modal-overlay flex items-center justify-center" onClick={() => setModalOpen(false)}>
                            <SiteMap closeModal={closeModal}/>
                        </div>
                    </>
                )}
            </section>
            <div className="border-t border-white mx-auto"></div>
            <ScrollToTopButton/>
        </>
    )
}

export default Header