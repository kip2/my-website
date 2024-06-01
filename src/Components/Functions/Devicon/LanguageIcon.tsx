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
                text-xl  p-1 
                bg-gray-800
                icon-content
            `}>
                <div className="text-xs language-tooltip">{language}</div>
            </i>
        </>
    )
}

export default LanguageIcon