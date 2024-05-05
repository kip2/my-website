interface SubTitleProps {
    title: string,
    subTitle: string,
    linkId: string,
}

const SubTitle: React.FC<SubTitleProps> = ({ title, linkId, subTitle }) => {
    return (
        <>
            <h1 id={linkId} className=" text-4xl mx-auto w-fit max-md:text-2xl font-serif italic">
                {title}
            </h1>
            <p className="text-sm text-center mt-3 italic">
                〜 {subTitle} 〜
            </p>
        </>
    )
}

export default SubTitle