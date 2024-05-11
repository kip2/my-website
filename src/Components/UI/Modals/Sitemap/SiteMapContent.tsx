const SiteMapContent = () => {
    return (
        <>
            <h1 className="text-center text-3xl font-serif italic font-bold mb-3">SITE MAP</h1>
            <div className="grid grid-cols-4
                    max-[400px]:grid-cols-1
                ">
                {/* top  */}
                <div className="grid justify-items-center text-xs py-3">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="35" height="35">
                        <rect width="256" height="256" fill="none"/>
                        <path d="M104,216V152h48v64h64V120a8,8,0,0,0-2.34-5.66l-80-80a8,8,0,0,0-11.32,0l-80,80A8,8,0,0,0,40,120v96Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
                    </svg>
                    <p>TOP</p>
                </div>
                <p className="col-span-3 flex items-center
                max-[400px]:col-span-1 max-[400px]:justify-center
                ">
                    サイトのトップページ
                </p>
                
                {/* about */}
                <div className="grid justify-items-center text-xs py-3">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="35" height="35">
                        <rect width="256" height="256" fill="none"/>
                        <line x1="32" y1="64" x2="32" y2="144" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
                        <path d="M56,216c15.7-24.08,41.11-40,72-40s56.3,15.92,72,40" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
                        <polygon points="224 64 128 96 32 64 128 32 224 64" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
                        <path d="M169.34,82.22a56,56,0,1,1-82.68,0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
                    </svg>
                    <p>ABOUT</p>
                </div>
                <p className="col-span-3 flex items-center
                max-[400px]:col-span-1 max-[400px]:justify-center
                ">
                    kip2について紹介するページ
                </p>

                {/* products */}
                <div className="grid justify-items-center text-xs my-5">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="35" height="35">
                        <rect width="256" height="256" fill="none"/>
                        <path d="M168,224H56a8,8,0,0,1-8-8V72a8,8,0,0,1,8-8h80l40,40V216A8,8,0,0,1,168,224Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M80,64V40a8,8,0,0,1,8-8h80l40,40V184a8,8,0,0,1-8,8H176" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="88" y1="152" x2="136" y2="152" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="88" y1="184" x2="136" y2="184" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
                    </svg>
                    <p>PRODUCTS</p>
                </div>
                <p className="col-span-3 flex items-center
                max-[400px]:col-span-1 max-[400px]:justify-center
                ">
                    今まで作成してきたものを紹介するページ
                </p>

                {/* favorite */}
                <div className="grid justify-items-center text-xs py-3">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="35" height="35">
                        <rect width="256" height="256" fill="none"/>
                        <path d="M192,224l-64-40L64,224V48a8,8,0,0,1,8-8H184a8,8,0,0,1,8,8Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
                        <polyline points="192 176 127.99 136 64 176" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
                    </svg>
                    <p>FAVORITE</p>
                </div>
                <p className="col-span-3 flex items-center
                max-[400px]:col-span-1 max-[400px]:justify-center
                ">
                    好きなものについて紹介するページ
                </p>

                {/* influenced */}
                <div className="grid justify-items-center text-xs py-3">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="35" height="35">
                        <rect width="256" height="256" fill="none"/>
                        <path d="M84.27,171.73l-55.09-20.3a7.92,7.92,0,0,1,0-14.86l55.09-20.3,20.3-55.09a7.92,7.92,0,0,1,14.86,0l20.3,55.09,55.09,20.3a7.92,7.92,0,0,1,0,14.86l-55.09,20.3-20.3,55.09a7.92,7.92,0,0,1-14.86,0Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
                        <line x1="176" y1="16" x2="176" y2="64" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
                        <line x1="224" y1="72" x2="224" y2="104" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
                        <line x1="152" y1="40" x2="200" y2="40" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
                        <line x1="208" y1="88" x2="240" y2="88" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
                    </svg>
                    <p>INFLUENCED</p>
                </div>
                <p className="col-span-3 flex items-center
                max-[400px]:col-span-1 max-[400px]:justify-center
                ">
                    プログラミングや人生において影響を受けてきたものの紹介ページ
                </p>
            </div>
        </>
    )
}

export default SiteMapContent