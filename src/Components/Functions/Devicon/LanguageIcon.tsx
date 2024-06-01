import iconMap from "./iconMap"

interface LanguageIconProps  {
    language: string
}

const LanguageIcon:React.FC<LanguageIconProps> = ({ language }) => {
    const iconClass = iconMap[language.toLowerCase()]

    if (!iconClass) {
        return <></>
    }

    return (
        <>
            <i className={`${iconClass}
                text-6xl  px-1 mx-1 my-1
                icon-content
            `}>
                <div className="text-xs language-tooltip">{language}</div>
            </i>
        </>
    )
}

export default LanguageIcon