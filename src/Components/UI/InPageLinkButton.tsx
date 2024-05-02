
interface InPageLinkButtonProps {
    rootPath: string,
    linkId: string,
    text: string,
}

const InPageLinkButton:React.FC<InPageLinkButtonProps> = ({ rootPath, linkId, text }) => {
    const path = rootPath + '#' + linkId

    return (
        <>
            <a className="text-2xl p-4 italic text-center
                    block
                    w-52
                    border-2 bg-gray-400/10  border-gray-500 rounded-md 
                    px-6 py-3 
                    hover:bg-gray-600 transition duration-500 ease-in-out
                    hover:border-slate-200
                    "
                href={path}
            >
                {text}
            </a>
        </>
    )
}

export default InPageLinkButton