interface TitleProps {
    title: string,
    subTitle: string,
    linkId: string,
}

const Title: React.FC<TitleProps> = ({ title, linkId, subTitle }) => {
    return (
        <>
            <h1 id={linkId} className=" text-6xl mx-auto w-fit max-md:text-4xl font-serif italic">
                {title}
            </h1>
            <p className="text-sm text-center mt-3 mb-10 italic">
                〜 {subTitle} 〜
            </p>
        </>
    )
}

export default Title