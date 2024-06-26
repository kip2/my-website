interface QualificationProps {
    data: string,
    qualification: string,
    url: string,
}

const Qualification: React.FC<QualificationProps> = ({ data, qualification, url}) => {
    return (
        <>
            <section className="flex justify-center mt-5">
                <div className="flex justify-center">
                    <a href={url} className="w-full">
                        <div className="grid max-md:grid-cols-2 grid-cols-3 w-190 max-lg:w-144 max-md:w-128 max-sm:w-96 max-[470px]:w-72
                            text-2xl 
                            border-2 bg-gray-400/10  border-gray-700 rounded-md 
                            px-6 py-3 
                            hover:bg-gray-600 transition duration-500 ease-in-out
                            hover:border-slate-200
                        ">
                            <div className="grid grid-cols-3 items-center">
                                <p>🏆</p>
                                <p className="italic ml-2 max-md:text-xs text-sm text-gray-400">{data}</p>
                            </div>
                            <p className="italic">{qualification}</p>
                        </div>
                    </a>
                </div>
            </section>
        </>
    )
}

export default Qualification