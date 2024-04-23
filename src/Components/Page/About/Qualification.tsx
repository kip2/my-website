interface QualificationProps {
    data: string,
    qualification: string,
    url: string,
}

const Qualification: React.FC<QualificationProps> = ({ data, qualification, url}) => {
    return (
        <>
            <section className="flex justify-center mt-5">
                <div className=" grid max-md:grid-cols-2 grid-cols-3 w-128 max-md:text-xl text-2xl border-2 border-gray-500 rounded-md px-5 py-2 hover:bg-gray-700 transition duration-300 ease-in-out">
                    <a href={url} className="flex items-center">
                        <p>🏆</p>
                        <p className="italic ml-2 max-md:text-xs text-sm text-gray-400">{data}</p>
                    </a>
                    <p className="italic">{qualification}</p>
                </div>
            </section>
        </>
    )
}

export default Qualification