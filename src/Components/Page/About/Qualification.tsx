interface QualificationProps {
    data: string,
    qualification: string,
    url: string,
}

const Qualification: React.FC<QualificationProps> = ({ data, qualification, url}) => {
    return (
        <>
            <section className="flex justify-center mt-5">
                <div className=" grid max-md:grid-cols-2 grid-cols-3 w-144 max-md:w-128 max-md:text-base text-2xl border-2 bg-gray-400/10  border-gray-700 rounded-md px-6 py-3 hover:bg-gray-600 transition duration-300 ease-in-out">
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