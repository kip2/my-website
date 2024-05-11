interface SiteMapProps {
    closeModal: () => void
}

const SiteMap:React.FC<SiteMapProps> = ({closeModal}) => {
    return (
        <>
            <div className="fixed top-[100px] left-1/3 bg-slate-500  z-[10000] 
                min-h-[300px] min-w-[300px] 
                rounded-sm
                p-5
            ">
                <div className="flex justify-end" >
                    <svg className=" hover:" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="30" height="30" onClick={closeModal}>
                        <rect width="256" height="256" fill="none"/>
                        <rect x="40" y="40" width="176" height="176" rx="8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
                        <line x1="160" y1="96" x2="96" y2="160" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
                        <line x1="96" y1="96" x2="160" y2="160" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
                    </svg>
                </div>
                <h1>hello modal</h1>
            </div>
        </>
    )
}

export default SiteMap